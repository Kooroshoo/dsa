document.addEventListener('DOMContentLoaded', () => {
    const DOM = {
        main: document.getElementById('main-container'),
        questions: document.getElementById('questions-container'),
        customResult: document.getElementById('custom-result'),
        modalOverlay: document.getElementById('template-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        descInput: document.getElementById('custom-desc')
    };

    const toId = text => text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Core Data Dictionaries
    let templates = {}, algoPatterns = {}, patternSignals = {}, knownProblems = [], dictionaries = { step2: {}, step3: {}, step4: {}, space: {}, master: {} };

    // --- INITIALIZATION ---
    Promise.all([
        fetch('cheatsheet.md').then(r => r.text()),
        fetch('questions.md').then(r => r.ok ? r.text() : null),
        fetch('templates.md').then(r => r.ok ? r.text() : null),
        fetch('catalog.md').then(r => r.ok ? r.text() : null)
    ]).then(([cheatText, questionsText, templatesText, catalogText]) => {
        parseTemplates(templatesText);
        renderCheatSheet(cheatText);
        buildDictionaries();
        setupEventListeners();
        renderPreloadedQuestions(questionsText);
        parseCatalog(catalogText);
        renderMath();
    }).catch(console.error);

    // catalog.md rows "| # | Problem | Algorithm | Pattern |" make popular problems recognisable by name or number
    function parseCatalog(text) {
        if (!text) return;
        text.split('\n').forEach(line => {
            const cells = line.split('|').map(c => c.trim());
            if (cells.length < 6 || !/^\d+$/.test(cells[1])) return;
            const [, num, title, algo, pattern] = cells;
            knownProblems.push({ key: normTitle(title), num, title, algo, pattern: pattern || undefined });
        });
    }

    // --- PARSERS & RENDERERS ---
    function parseTemplates(text) {
        if (!text) return;
        // "**Time:** $..$ · **Space:** $..$ (note)" becomes a row of complexity badges
        const complexityRe = /^\*\*Time:\*\* (\$[^$]+\$) · \*\*Space:\*\* (\$[^$]+\$)(?: \((.+)\))?[ \t]*\r?$/gm;
        const badges = (_, time, space, note) =>
            `<div class="complexity"><span class="cx"><span class="cx-label">Time</span>${time}</span>` +
            `<span class="cx"><span class="cx-label">Space</span>${space}</span>` +
            (note ? `<span class="cx-note">${note}</span>` : '') + `</div>`;
        text.split(/^##\s+/m).filter(b => b.trim()).forEach(block => {
            const lines = block.split('\n');
            const lookFor = block.match(/^\*\*Look for:\*\* (.+)$/m);
            if (lookFor) patternSignals[lines[0].trim()] = [...lookFor[1].matchAll(/"([^"]+)"/g)].map(m => m[1].toLowerCase());
            templates[lines[0].trim()] = marked.parse(lines.slice(1).join('\n').replace(/^\*\*Look for:\*\*.*\r?\n?/m, '').trim().replace(complexityRe, badges));
        });
    }

    function renderCheatSheet(mdText) {
        const match = mdText.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/);
        let content = mdText;
        if (match) {
            const yaml = match[1];
            document.getElementById('page-title').innerText = (yaml.match(/title:\s*(.*)/) || [])[1]?.trim() || 'Cheat Sheet';
            document.getElementById('page-intro').innerHTML = marked.parseInline((yaml.match(/intro:\s*\|\r?\n\s*(.*)/) || [])[1]?.trim() || '');
            const bgStr = (yaml.match(/background:\s*(.*)/) || [])[1]?.trim();
            if (bgStr) document.documentElement.style.setProperty('--theme-color', bgStr.replace(/^bg-\[?|\]?$/g, ''));
            content = mdText.replace(match[0], '').trim();
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = marked.parse(content);
        let grid = null, cardBody = null, currentCardTitle = '', solver = null;

        Array.from(tempDiv.children).forEach(node => {
            if (node.tagName === 'H2') {
                const cleanText = node.textContent.replace(/\{.*?\}/g, '').trim();
                // "{.hidden}" sections hold analyzer data only; "{.solver}" is drawn as the interactive solver
                const hidden = /\{\.hidden\}/.test(node.textContent);
                const isSolver = /\{\.solver\}/.test(node.textContent);
                DOM.main.append(
                    Object.assign(document.createElement('h2'), { className: 'section-title', innerHTML: cleanText, id: toId(cleanText), hidden }),
                    grid = Object.assign(document.createElement('div'), { className: isSolver ? 'solver' : 'grid-container', hidden })
                );
                solver = isSolver ? { root: grid, step: 0, mode: null } : null;
                cardBody = null;
            } else if (solver) {
                addToSolver(solver, node);
            } else if (node.tagName === 'H3') {
                if (!grid) DOM.main.appendChild(grid = Object.assign(document.createElement('div'), { className: 'grid-container' }));
                const cleanText = node.textContent.replace(/\{.*?\}/g, '').trim();
                currentCardTitle = cleanText;
                const card = Object.assign(document.createElement('div'), { className: 'cheat-card' });
                card.innerHTML = `<div class="cheat-card-header">${cleanText}</div>`;
                card.appendChild(cardBody = Object.assign(document.createElement('div'), { className: 'cheat-card-body' }));
                grid.appendChild(card);
            } else if (cardBody) {
                if (node.tagName === 'TABLE') {
                    const wrap = Object.assign(document.createElement('div'), { className: 'table-wrapper' });
                    // Empty header cells extend the previous header across their column (e.g. "Patterns")
                    node.querySelectorAll('thead th').forEach(th => {
                        const prev = th.previousElementSibling;
                        if (prev && !th.textContent.trim()) { prev.colSpan += 1; th.remove(); }
                    });
                    const rows = Array.from(node.querySelectorAll('tbody tr'));
                    const isAlgorithmsTable = currentCardTitle === 'Algorithms';
                    rows.forEach(row => {
                        const cell = row.querySelector('td:first-child');
                        const targetEl = cell.querySelector('strong') || cell;
                        let algoName = targetEl.textContent.trim();
                        if (algoName.includes('Heap')) algoName = 'Heap & Priority Queue';
                        targetEl.classList.add('table-algo-link');
                        targetEl.setAttribute('data-algo', algoName);
                        if (isAlgorithmsTable) {
                            algoPatterns[algoName] = Array.from(row.querySelectorAll('.pattern-link'))
                                .map(p => ({ key: p.getAttribute('data-algo'), label: p.textContent.trim() }));
                            row.querySelectorAll('.pattern-link').forEach(p => {
                                p.nextElementSibling?.querySelectorAll('a').forEach(a => {
                                    const slug = (a.getAttribute('href').match(/problems\/([^/]+)/) || [])[1] || '';
                                    const title = slug.split('-').map(w => /^(i|ii|iii|iv)$/.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)).join(' ');
                                    knownProblems.push({ key: normTitle(title), num: a.textContent.replace('#', ''), title, algo: algoName, pattern: p.getAttribute('data-algo') });
                                });
                            });
                        }
                    });
                    wrap.appendChild(node);
                    cardBody.appendChild(wrap);
                } else {
                    cardBody.appendChild(node);
                }
            }
        });
        if (typeof Prism !== 'undefined') Prism.highlightAll();
    }

    // --- "HOW TO APPROACH" (3-step tick guide) ---
    // Markdown: "### Name :: question" steps; inside, each "**Label**" + "- option | hint | patterns" list is a row of pick-one chips.
    // Each step shows ONE tip. The plan comes from planFor(): if-then rules keyed by the chip labels.
    // "### Examples" + "#### Title" + list makes expandable worked examples.
    let solverGroupId = 0;
    function addToSolver(s, node) {
        if (!s.plan) {
            s.plan = Object.assign(document.createElement('div'), { className: 'solver-plan' });
            s.root.appendChild(s.plan);
        }
        if (node.tagName === 'P' && !s.step) {
            s.root.insertBefore(Object.assign(document.createElement('div'), { className: 'solver-idea', innerHTML: node.innerHTML }), s.plan);
        } else if (node.tagName === 'P' && s.mode !== 'examples') {
            s.label = node.textContent.trim();
        } else if (node.tagName === 'H3') {
            const [name, prompt] = node.textContent.split('::').map(t => t.trim());
            s.label = '';
            if (name.toLowerCase() === 'examples') {
                s.mode = 'examples';
                s.examples = Object.assign(document.createElement('details'), { className: 'solver-examples', innerHTML: '<summary class="solver-examples-title">Examples</summary>' });
                s.root.appendChild(s.examples);
                return;
            }
            s.step++;
            s.mode = 'one';
            s.row = Object.assign(document.createElement('div'), { className: `solver-row solver-row-${s.step}` });
            s.row.innerHTML = `<div class="solver-label"><span>Step ${s.step}</span>${name}</div>
                <div class="solver-body"><div class="solver-prompt">${prompt || ''}</div><div class="solver-groups"></div><div class="solver-result"></div></div>`;
            s.row.addEventListener('change', e => { s.row.last = e.target; updateSolver(s); });
            s.root.insertBefore(s.row, s.plan);
        } else if (node.tagName === 'H4' && s.mode === 'examples') {
            const ex = Object.assign(document.createElement('details'), { className: 'solver-example' });
            ex.innerHTML = `<summary>${node.innerHTML}</summary>`;
            s.examples.appendChild(ex);
            s.example = ex;
        } else if (node.tagName === 'UL') {
            if (s.mode === 'examples') return s.example?.appendChild(node);
            const group = Object.assign(document.createElement('div'), { className: 'solver-group' });
            group.options = Array.from(node.children).map(li => {
                const [label, hint = '', pills = '', fix = ''] = li.innerHTML.split(/\s*\|\s*/);
                return { label, hint, pills, fix };
            });
            // Each group is pick-one; clicking a ticked chip again un-ticks it
            const name = 'solver-' + (++solverGroupId);
            group.innerHTML = (s.label ? `<span class="solver-group-label">${s.label}</span>` : '') + '<div class="solver-chips">' +
                group.options.map((o, i) => `<label class="solver-chip"><input type="radio" name="${name}" value="${i}">${chipLabel(o.label)}</label>`).join('') + '</div>';
            group.querySelectorAll('input').forEach(r => r.addEventListener('click', () => {
                if (r.dataset.was === '1') { r.checked = false; r.dispatchEvent(new Event('change', { bubbles: true })); }
                group.querySelectorAll('input').forEach(x => x.dataset.was = x.checked ? '1' : '');
            }));
            s.row.querySelector('.solver-groups').appendChild(group);
            updateSolver(s);
        }
    }

    // "Small (n ≤ 20)" -> "Small" plus a quieter "n ≤ 20" note (needs a space before the bracket, so "O(1)" stays whole)
    const chipLabel = label => label.replace(/\s+\(((?:[^()]|\([^()]*\))*)\)\s*$/, ' <span class="chip-note">$1</span>');

    // The plan follows the interview script: what you are given → how fast it must be → the obvious slow
    // solution → the tool that removes its slow part. Each rule is one decision you would say out loud.
    const SLOW = {            // what each brute force costs (1 = n, 1.5 = n log n, 2 = n², 3 = 2ⁿ), and how to say it
        'Each item': [1, 'one loop'], 'Pairs': [2, 'every pair (n²)'], 'Subarrays': [2, 'every range (n²)'], 'Best sum': [2, 'every range (n²)'],
        'Subsets': [3, 'every combination (2ⁿ)'], 'Ways / best': [3, 'every choice (2ⁿ)'], 'Top k': [1.5, 'sorting everything (n log n)'],
        'Matching': [2, 'scanning for each partner (n²)'], 'Math': [1, 'the long way'] };
    const SIZE = { Small: [3, 'n ≤ 20'], Medium: [2, 'n ≤ 10³'], Large: [1.5, 'n > 10³'] };   // the costliest brute force each size allows
    const BY_GIVEN = {        // when one loop is enough, the input decides the tool
        Number: ['Math & Geometry', 'work digit by digit', 'O(log n)', 'O(1)'], 'Array / string': ['HashMap & HashSet', 'one pass with a hash map', 'O(n)', 'O(n)'],
        'Sorted array': ['Binary Search', 'sorted → halve the range each step', 'O(log n)', 'O(1)'], 'Linked list': ['Linked Lists', 'walk the pointers', 'O(n)', 'O(1)'],
        Tree: ['Trees', 'recurse left and right', 'O(n)', 'O(h)'], Graph: ['Graphs', 'visit neighbours, mark visited', 'O(V + E)', 'O(V)'],
        'Stack / queue': ['Stack and Queue', 'push and pop', 'O(1) per step', 'O(n)'] };

    function planFor({ given, memory, slow }) {
        const p = (algo, patterns, reason, time, space) => ({ algo, patterns, reason, time, space });
        const inPlace = memory === 'Constant';
        switch (slow) {
            case 'Each item': { const [algo, reason, time, space] = BY_GIVEN[given]; return p(algo, null, reason, time, space); }
            case 'Pairs':
                if (given === 'Tree') return p('Trees', ['Tree DFS'], 'compare the trees node by node', 'O(n · m)', 'O(h)');
                if (given === 'Linked list') return p('Linked Lists', ['Fast & Slow Pointers'], 'walk two pointers along the lists', 'O(n)', 'O(1)');
                if (given === 'Sorted array' || inPlace)
                    return p('Two Pointers', ['Opposite Ends', 'Same Direction'], (given === 'Sorted array' ? 'sorted' : 'no extra memory') + ' → walk two pointers', 'O(n)', 'O(1)');
                return p('HashMap & HashSet', ['Seen', 'Frequency', 'Complement'], 'not sorted, extra memory OK → store what you have seen', 'O(n)', 'O(n)');
            case 'Subarrays': return p('Sliding Window', ['Variable Window', 'Fixed Window'], 'slide one window instead', 'O(n)', 'O(k)');
            case 'Best sum': return p('Dynamic Programming', ['1D DP'], 'extend the sum or restart at each item', 'O(n)', 'O(1)');
            case 'Subsets': return p('Backtracking', ['Subsets', 'Permutations', 'Combinations'], 'you must list them all → choose, explore, undo', 'O(2ⁿ)', 'O(n)');
            case 'Ways / best':
                return p('Dynamic Programming', given === 'Graph' ? ['2D DP'] : ['1D DP', 'Knapsack', 'Longest Increasing Subsequence', '2D DP'],
                    'the same sub-answers repeat → remember them', given === 'Graph' ? 'O(m · n)' : 'O(n) to O(n²)', 'O(n)');
            case 'Top k':
                if (given === 'Tree') return p('Trees', ['Binary Search Tree'], 'a BST is already sorted → walk it in order', 'O(h + k)', 'O(h)');
                if (given === 'Linked list') return p('Heap & Priority Queue', ['K-Way Merge'], 'keep the list heads in a heap', 'O(n log k)', 'O(k)');
                return p('Heap & Priority Queue', ['Top K', 'Two Heaps', 'K-Way Merge'], 'keep only the best k in a heap', 'O(n log k)', 'O(k)');
            case 'Matching': return p('Stack and Queue', ['Matching Brackets', 'Monotonic Stack'], 'keep waiting items on a stack', 'O(n)', 'O(n)');
            case 'Math': return p('Math & Geometry', ['Digit Manipulation', 'Matrix Traversal', 'Vectors'], 'use % 10, bit tricks, index math or vector maths', 'O(log n) or O(n)', 'O(1)');
        }
    }

    function updateSolver(s) {
        const pick = {};       // row label (lower case) -> ticked chip, without its bracket note
        s.root.querySelectorAll('.solver-row').forEach(row => {
            const picked = [];
            row.querySelectorAll('.solver-group').forEach(g => g.querySelectorAll('input').forEach(input => {
                input.closest('.solver-chip').classList.toggle('on', input.checked);
                if (!input.checked) return;
                const o = g.options[input.value];
                picked.push({ ...o, input });
                pick[g.querySelector('.solver-group-label')?.textContent.trim().toLowerCase()] = o.label.replace(/\s+\(.*\)\s*$/, '').trim();
            }));
            // Each step shows one short tip: the most recently ticked choice
            // (a placeholder keeps the line, so the card does not jump in height)
            const lead = picked.find(o => o.input === row.last) || picked[picked.length - 1];
            row.querySelector('.solver-result').innerHTML = lead?.hint
                ? `<span class="solver-arrow">\u2192</span><span class="solver-hint">${lead.hint}</span>`
                : `<span class="solver-arrow">\u2192</span><span class="solver-hint-empty">Choose items</span>`;
        });

        // Plan: shown once every row has a pick
        const groups = Array.from(s.root.querySelectorAll('.solver-group'));
        const left = groups.filter(g => !g.querySelector('input:checked')).length;
        if (left) {
            s.plan.innerHTML = `<span class="solver-plan-label">Your plan</span><span class="solver-plan-empty">Pick one in each row to see your plan${left < groups.length ? ` (${left} left)` : ''}.</span>`;
            return;
        }
        const slow = pick['slow way'], r = planFor({ given: pick.given, memory: pick.memory, slow });
        const keys = r.patterns || (algoPatterns[r.algo] || []).map(x => x.key);
        const label = key => (algoPatterns[r.algo] || []).find(x => x.key === key)?.label || key;
        const patterns = keys.map(k => `<span class="pattern-link" data-algo="${k}">${label(k)}</span>`).join('');
        const [cost, slowSays] = SLOW[slow], [limit, sizeSays] = SIZE[pick.size];
        const verdict = slow === 'Each item' ? 'one loop is fast enough.' : cost <= limit ? `${slowSays} would still pass.` : `${slowSays} is too slow.`;
        s.plan.innerHTML = `<span class="solver-plan-label">Your plan</span>
            <span class="solver-suggest best"><span class="pattern-link" data-algo="${r.algo}">${r.algo}</span>${patterns ? `<span class="solver-sep">\u203a</span><span class="solver-patterns">${patterns}</span>` : ''}</span>
            <div class="solver-next"><span class="solver-next-label">Why</span>${sizeSays}, so ${verdict} ${r.reason[0].toUpperCase() + r.reason.slice(1)}.</div>
            <div class="solver-next"><span class="solver-next-label">Target</span>${r.time} time · ${r.space} memory</div>`;
    }

    function buildDictionaries() {
        // One flat light tint per section instead of a 13-color rainbow, so color
        // communicates *category* (structure) rather than being assigned at random.
        const sectionPalettes = {
            'step-2-analyze-input-format': ['#D1FAE5'],              // light green (paired with Output)
            'analyze-output-format': ['#D1FAE5'],                    // light green
            'step-3-keyword-pattern-recognition': ['#EDE9FE'],       // light violet
            'step-1-time-constraints': ['#DBEAFE'],                  // light blue
            'space-constraints': ['#DBEAFE']                        // light blue (paired with Time)
        };
        const sectionCounters = {};

        const extract = (sectionId, isStrict) => {
            const dict = {}, header = document.getElementById(sectionId);
            if (!header) return dict;
            const palette = sectionPalettes[sectionId] || ['#E2E8F0'];
            sectionCounters[sectionId] = 0;
            let curr = header.nextElementSibling;
            while (curr && curr.tagName !== 'H2') {
                if (curr.classList.contains('grid-container')) {
                    curr.querySelectorAll('.cheat-card').forEach(card => {
                        const title = card.querySelector('.cheat-card-header').textContent.trim();
                        const listItems = Array.from(card.querySelectorAll('li'));
                        const items = listItems.map(el => el.textContent.trim());
                        const color = palette[sectionCounters[sectionId]++ % palette.length];
                        
                        const cardHeader = card.querySelector('.cheat-card-header');
                        cardHeader.style.backgroundColor = color; 
                        cardHeader.style.color = '#1e293b';
                        cardHeader.style.borderBottom = '1px solid rgba(0,0,0,0.1)';

                        let kws = isStrict ? items.map(s => s.toLowerCase().replace(/["']/g, '')) 
                                           : [title.toLowerCase(), ...items];
                        
                        if (!isStrict) { 
                            if (title.includes('Grid')) kws.push('grid', 'matrix', '2d array', 'm x n');
                            if (title.includes('Tree')) kws.push('binary tree', 'bst', 'tree node', 'root node', 'tree');
                            if (title.includes('Graph')) kws.push('graph', 'edges', 'vertices', 'directed');
                            if (title.includes('Sorted Array')) kws.push('sorted array', 'ascending', 'non-decreasing');
                            if (title.includes('Linked List')) kws.push('linked list', 'listnode', 'node');
                            if (title.includes('Single Number')) kws.push('return the minimum', 'return the maximum', 'length of');
                            if (title.includes('List of Lists')) kws.push('all possible', 'return all');
                            if (title.includes('Modified Array')) kws.push('in-place', 'modify nums');
                        }
                        // Keyword weight: longer phrases are more specific; **bold** keywords are strong triggers
                        const weights = {};
                        if (isStrict) listItems.forEach((el, i) => {
                            weights[kws[i]] = Math.min(kws[i].split(/\s+/).length, 3) + (el.querySelector('strong') ? 3 : 0);
                        });
                        dict[title] = { keywords: [...new Set(kws)].filter(k => k.length > 2), weights, solutions: [title], color };
                    });
                }
                curr = curr.nextElementSibling;
            }
            return dict;
        };

        // Updated IDs to match the new markdown headers
        dictionaries.step2 = extract('step-2-analyze-input-format', false);
        dictionaries.step3 = extract('analyze-output-format', false);
        dictionaries.step4 = extract('step-3-keyword-pattern-recognition', true);
        dictionaries.space = extract('space-constraints', true);
        extract('step-1-time-constraints', true); // colors the cards only, not used for matching
        dictionaries.master = { ...dictionaries.step2, ...dictionaries.step3, ...dictionaries.step4, ...dictionaries.space };
    }

    // --- ANALYSIS ENGINE ---
    function getConstraintInfo(text) {
        if (/-?2\^31|-?10\^9/.test(text)) return { str: "Large Values (32-bit Int)", html: "<strong>Math, Bit Manipulation</strong>. Watch for overflow!" };
        if (/10\^7|10\^8|10000000/.test(text)) return { str: "Large ($\\ge 10^7$)", html: "<strong>Binary Search, Math, $O(1)$ formulas</strong> only." };
        if (/10\^4|10\^5|10\^6|10000(?!\d)|10\*\*4|10\*\*5/.test(text)) return { str: "Medium ($10^4$ to $10^6$)", html: "<strong>Two Pointers, Greedy, DP, Sliding Window, Heaps</strong>. No brute force." };
        if (/(?:<=|<|==|=)\s*(1000|2000|3000|3999|[1-9][0-9]{2})(?!\d|\^|\*)/.test(text)) return { str: "Medium-Small ($n \\le 10^3$)", html: "<strong>$O(N^2)$ approaches</strong> might pass." };
        if (/(?:<=|<|==|=)\s*(20|15|10|50|100|[1-9][0-9]?)(?!\d|\^|\*)/.test(text)) return { str: "Small ($n \\le 100$)", html: "<strong>Brute Force, Backtracking, Recursion</strong> are highly viable." };
        return { str: "Unknown", html: "Assume Medium constraints: $O(N)$ or $O(N \\log N)$." };
    }

    const keywordRegex = (kw, flags = 'i') => new RegExp(`(?<=\\W|^)(${escapeRegex(kw)}(?:es|s)?)(?=\\W|$)`, flags);

    // Scores every algorithm by the summed weight of its matched keywords and keeps
    // only those close to the best score, strongest first.
    function rankMatches(text, dict, { minRatio = 0.6, max = 3 } = {}) {
        const scored = Object.entries(dict).map(([cat, data]) => {
            const hits = data.keywords.filter(kw => keywordRegex(kw).test(text));
            const score = hits.reduce((sum, kw) => sum + (data.weights[kw] || 1), 0);
            const best = hits.sort((a, b) => (data.weights[b] || 1) - (data.weights[a] || 1))[0];
            return { category: cat, matchedKeyword: best, hits, color: data.color, score };
        }).filter(m => m.score > 0).sort((a, b) => b.score - a.score);
        if (!scored.length) return [];
        return scored.filter(m => m.score >= scored[0].score * minRatio).slice(0, max);
    }

    function findMatches(text, dict) {
        const matches = [];
        for (const [cat, data] of Object.entries(dict)) {
            for (const kw of data.keywords) {
                if (!kw) continue;
                if (keywordRegex(kw).test(text)) {
                    matches.push({ category: cat, matchedKeyword: kw, color: data.color });
                    break;
                }
            }
        }
        return matches;
    }

    function highlightKeywords(text, matches) {
        let hlText = text;
        const placeholders = [];
        matches.sort((a, b) => b.matchedKeyword.length - a.matchedKeyword.length).forEach(m => {
            const regex = keywordRegex(m.matchedKeyword, 'gi');
            hlText = hlText.replace(regex, match => {
                placeholders.push(`<mark style="background-color: ${m.color};">${match}</mark>`);
                return `__MARK_${placeholders.length - 1}__`;
            });
        });
        placeholders.forEach((html, i) => hlText = hlText.replace(`__MARK_${i}__`, html));
        return hlText;
    }

    // "Two Sum", "2 sum" and "two-sum" all normalize to "2sum"
    const normTitle = s => s.toLowerCase().replace(/\btwo\b/g, '2').replace(/\bthree\b/g, '3').replace(/\bfour\b/g, '4').replace(/[^a-z0-9]/g, '');

    // A short input like "Two Sum", "1. Two Sum" or "#1" is looked up among the site's problems
    function findKnownProblem(input) {
        const s = input.trim();
        if (!s || s.split(/\s+/).length > 8) return null;
        const num = s.match(/^#?(\d+)\.?$/);
        if (num) return knownProblems.find(k => k.num === num[1]) || null;
        const q = normTitle(s.replace(/^(#\d+|\d+\.)\s+/, ''));
        if (q.length < 3) return null;
        const exact = knownProblems.find(k => k.key === q);
        if (exact) return exact;
        const prefix = knownProblems.filter(k => k.key.startsWith(q));
        return new Set(prefix.map(k => k.key)).size === 1 ? prefix[0] : null;
    }

    function analyzeProblem(title, rawDesc) {
        const codeBlocks = [];
        let cleanDesc = rawDesc.replace(/```[\s\S]*?```|`[\s\S]*?`/g, m => { codeBlocks.push(m); return `__CODE_${codeBlocks.length - 1}__`; });

        const fullTextLower = (title + " " + cleanDesc).toLowerCase().replace(/\*\*|__/g, '');
        const cInfo = getConstraintInfo((title + " " + rawDesc).toLowerCase());

        const m2 = findMatches(fullTextLower, dictionaries.step2);
        const m3 = findMatches(fullTextLower, dictionaries.step3);
        let known = findKnownProblem((title + ' ' + rawDesc).trim());
        let knownLine = known ? (title + ' ' + rawDesc).trim() : '';
        // A pasted problem usually starts with its title on the first line
        if (!known && !title) {
            knownLine = rawDesc.trim().split('\n')[0].trim();
            known = findKnownProblem(knownLine);
        }
        // Keywords always run so the matched words can be highlighted, even when the title decides the answer
        const kwMatches = rankMatches(fullTextLower, dictionaries.step4);
        const knownColor = dictionaries.step4[known?.algo]?.color || '#EDE9FE';
        const m4 = known ? [{ category: known.algo, known, hits: [], color: knownColor }] : kwMatches;
        const mS = findMatches(fullTextLower, dictionaries.space);

        const m4Hits = kwMatches.flatMap(m => m.hits.map(kw => ({ matchedKeyword: kw, color: m.color })));
        const titleHit = known && knownLine ? [{ matchedKeyword: knownLine, color: knownColor }] : [];
        let hlDesc = highlightKeywords(cleanDesc, [...titleHit, ...m2, ...m3, ...m4Hits, ...mS]);
        codeBlocks.forEach((block, i) => hlDesc = hlDesc.replace(`__CODE_${i}__`, block));

        let algos = [...new Set(m4.map(m => m.category))];
        if (!algos.length) algos = m2.length ? ['Structure Traversal (See Step 2)'] : ['Ad-Hoc / Brute Force'];

        return { cInfo, m2, m3, m4, mS, hlDesc, algos, text: fullTextLower };
    }

    const createAnalysisCard = (rawDesc) => {
        const card = document.createElement('div');
        card.className = 'analysis-card';
        card.innerHTML = analysisHTML(analyzeProblem('', rawDesc), { hideDesc: true });
        return card;
    };

    const createQuestionCard = (title, rawDesc) => {
        const item = document.createElement('details');
        item.className = 'question-item';
        item.innerHTML = `
            <summary>${title}</summary>
            <div class="question-body">${analysisHTML(analyzeProblem(title, rawDesc), { hidePrediction: true })}</div>`;
        return item;
    };

    // Scores an algorithm's patterns by their "Look for" keywords; the best ones are marked likely
    function rankPatterns(algo, text, forced) {
        const scored = (algoPatterns[algo] || []).map((p, i) => {
            const hits = (patternSignals[p.key] || []).filter(kw => keywordRegex(kw).test(text));
            return { ...p, i, score: forced ? Number(p.key === forced) : hits.reduce((s, kw) => s + Math.min(kw.split(/\s+/).length, 3), 0) };
        });
        const top = Math.max(0, ...scored.map(p => p.score));
        scored.forEach(p => p.likely = top > 0 && p.score >= top * 0.6);
        return scored.sort((a, b) => (b.likely - a.likely) || (b.score - a.score) || (a.i - b.i));
    }

    // Patterns from algorithms that weren't predicted, but whose own signals match strongly
    function crossPatterns(algos, text) {
        const all = Object.keys(algoPatterns).flatMap(a => algoPatterns[a].map(p => ({ ...p, algo: a,
            score: (patternSignals[p.key] || []).filter(kw => kw.includes(' ') && keywordRegex(kw).test(text)).reduce((s, kw) => s + Math.min(kw.split(/\s+/).length, 3), 0) })));
        const top = Math.max(0, ...all.map(p => p.score));
        return all.filter(p => !algos.includes(p.algo) && p.score >= 2 && p.score >= top * 0.6)
            .sort((a, b) => b.score - a.score).slice(0, 2);
    }

    function analysisHTML({ cInfo, m2, m3, m4, mS, hlDesc, algos, text }, { hideDesc = false, hidePrediction = false } = {}) {
        const none = text => `<span class="step-none">${text}</span>`;
        const chips = matches => matches.map(m =>
            `<div>${m.category} <span class="trigger-word" style="background:${m.color}">${m.matchedKeyword}</span></div>`).join('');

        const predictions = algos.map(a => {
            const trigger = m4.find(m => m.category === a);
            const likely = rankPatterns(a, text, trigger?.known?.pattern).filter(p => p.likely);
            const why = !trigger ? ''
                : trigger.known ? `<span class="matched-keywords">known problem <strong>${trigger.known.num ? '#' + trigger.known.num + ' ' : ''}${trigger.known.title}</strong></span>`
                : `<span class="matched-keywords">matched ${trigger.hits.map(kw => `<span class="trigger-word" style="background:${trigger.color}">"${kw}"</span>`).join('')}</span>`;
            const tag = `<span class="algo-tag" data-algo="${a}" style="background:${dictionaries.master[a]?.color || '#e2e8f0'}">${a}</span>`;
            // One row per fitting approach: algorithm › pattern (algorithm alone if no pattern fits)
            return (likely.length ? likely : [null]).map(p => `<div class="prediction-item">
                ${tag}${p ? `<span class="approach-arrow">›</span><span class="pattern-link likely" data-algo="${p.key}">${p.label}</span>` : ''}
                ${why}
            </div>`).join('');
        }).join('') + (m4.some(m => m.known) ? '' : crossPatterns(algos, text).map(p => `<div class="prediction-item">
                <span class="algo-tag" data-algo="${p.algo}" style="background:${dictionaries.master[p.algo]?.color || '#e2e8f0'}">${p.algo}</span><span class="approach-arrow">›</span><span class="pattern-link likely" data-algo="${p.key}">${p.label}</span>
                <span class="matched-keywords">also fits</span>
            </div>`).join(''));

        const desc = `<div class="q-desc">${marked.parse(hlDesc)}</div>`;
        const prediction = hidePrediction
            ? `<details class="reveal-verdict"><summary>Reveal Predicted Approach</summary><div class="prediction">${predictions}</div></details>`
            : `<div class="prediction"><span class="step-label">Predicted Approach</span>${predictions}</div>`;

        return `
            ${hideDesc ? '' : desc}
            <div class="analysis-grid">
                <div class="analysis-cell"><span class="step-label">Time</span><div><strong>${cInfo.str}</strong> · ${cInfo.html}</div></div>
                <div class="analysis-cell"><span class="step-label">Space</span>${chips(mS) || none('No strict limit, O(N) is fine')}</div>
                <div class="analysis-cell"><span class="step-label">Input</span>${chips(m2) || none('Array / String / Number')}</div>
                <div class="analysis-cell"><span class="step-label">Output</span>${chips(m3) || none('Single value or array')}</div>
            </div>
            ${prediction}
            ${hideDesc ? `<details class="highlighted-text"><summary>Show matched keywords in text</summary>${desc}</details>` : ''}`;
    }

    // --- EVENT LISTENERS & RENDERERS ---
    function setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('algo-tag') || e.target.classList.contains('table-algo-link') || e.target.classList.contains('pattern-link')) {
                const algo = e.target.getAttribute('data-algo');
                DOM.modalTitle.innerText = algo;
                DOM.modalBody.innerHTML = templates[algo] || `<p><em>No template found for "${algo}". Add it to templates.md!</em></p>`;
                DOM.modalOverlay.classList.remove('hidden');
                if (typeof Prism !== 'undefined') Prism.highlightAllUnder(DOM.modalBody);
                renderMath(DOM.modalBody);
            }
        });

        document.getElementById('close-modal').addEventListener('click', () => DOM.modalOverlay.classList.add('hidden'));
        DOM.modalOverlay.addEventListener('click', e => { if (e.target === DOM.modalOverlay) DOM.modalOverlay.classList.add('hidden'); });

        document.getElementById('analyze-btn').addEventListener('click', () => {
            if (!DOM.descInput.value.trim()) return DOM.descInput.focus();
            DOM.customResult.replaceChildren(createAnalysisCard(DOM.descInput.value.trim()));
            if (typeof Prism !== 'undefined') Prism.highlightAllUnder(DOM.customResult);
            renderMath(DOM.customResult);
        });

        document.getElementById('clear-btn').addEventListener('click', () => {
            DOM.descInput.value = DOM.customResult.innerHTML = '';
            DOM.descInput.focus();
        });
    }

    function renderPreloadedQuestions(text) {
        if (!text) return DOM.questions.innerHTML = "<p>No questions found.</p>";
        DOM.questions.innerHTML = '';
        let total = 0;
        // "## Group" headings are optional; questions before any heading go in an untitled group
        text.split(/^##\s+(?!#)/m).filter(g => g.trim()).forEach(group => {
            const hasTitle = !group.trimStart().startsWith('#');
            const title = hasTitle ? group.split('\n')[0].trim() : '';
            const blocks = group.split(/^###\s+/m).slice(1).filter(b => b.trim());
            if (!blocks.length) return;
            total += blocks.length;

            const list = Object.assign(document.createElement('div'), { className: 'questions-list' });
            blocks.forEach(block => {
                const lines = block.split('\n');
                if (title) knownProblems.push({ key: normTitle(lines[0]), title: lines[0].trim(), algo: title });
                list.appendChild(createQuestionCard(lines[0].trim(), lines.slice(1).join('\n').trim()));
            });
            if (title) {
                const heading = Object.assign(document.createElement('h3'), { className: 'question-group-title' });
                heading.innerHTML = `${title} <span>${blocks.length}</span>`;
                DOM.questions.appendChild(heading);
            }
            DOM.questions.appendChild(list);
        });
        document.querySelector('.preloaded-details > summary').textContent = `Practice Questions (${total})`;
    }

    function renderMath(el = document.body) {
        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(el, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false });
        }
    }
});