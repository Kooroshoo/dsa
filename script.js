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
    let templates = {}, algoPatterns = {}, dictionaries = { step2: {}, step3: {}, step4: {}, space: {}, master: {} };

    // --- INITIALIZATION ---
    Promise.all([
        fetch('cheatsheet.md').then(r => r.text()),
        fetch('questions.md').then(r => r.ok ? r.text() : null),
        fetch('templates.md').then(r => r.ok ? r.text() : null)
    ]).then(([cheatText, questionsText, templatesText]) => {
        parseTemplates(templatesText);
        renderCheatSheet(cheatText);
        buildDictionaries();
        setupEventListeners();
        renderPreloadedQuestions(questionsText);
        renderMath();
    }).catch(console.error);

    // --- PARSERS & RENDERERS ---
    function parseTemplates(text) {
        if (!text) return;
        text.split(/^##\s+/m).filter(b => b.trim()).forEach(block => {
            const lines = block.split('\n');
            templates[lines[0].trim()] = marked.parse(lines.slice(1).join('\n').trim());
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
        let grid = null, cardBody = null, currentCardTitle = '';

        Array.from(tempDiv.children).forEach(node => {
            if (node.tagName === 'H2') {
                const cleanText = node.textContent.replace(/\{.*?\}/g, '').trim();
                DOM.main.append(
                    Object.assign(document.createElement('h2'), { className: 'section-title', innerHTML: cleanText, id: toId(cleanText) }),
                    grid = Object.assign(document.createElement('div'), { className: 'grid-container' })
                );
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
                    // The 6 highest-priority algorithms stay visible regardless of their row position
                    const coreAlgorithms = ['HashMap & HashSet', 'Binary Search', 'Trees', 'Graphs', 'Dynamic Programming', 'Heap & Priority Queue'];
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
                        }

                        if (isAlgorithmsTable && !coreAlgorithms.includes(algoName)) row.classList.add('extra-algo-row');
                    });
                    wrap.appendChild(node);
                    cardBody.appendChild(wrap);

                    if (isAlgorithmsTable && rows.some(r => r.classList.contains('extra-algo-row'))) {
                        const toggleBtn = Object.assign(document.createElement('button'), {
                            className: 'secondary-btn show-all-btn',
                            textContent: 'Show All'
                        });
                        toggleBtn.addEventListener('click', () => {
                            const expanded = wrap.classList.toggle('expanded');
                            toggleBtn.textContent = expanded ? 'Show Less' : 'Show All';
                        });
                        cardBody.appendChild(toggleBtn);
                    }
                } else {
                    cardBody.appendChild(node);
                }
            }
        });
        if (typeof Prism !== 'undefined') Prism.highlightAll();
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

    function analyzeProblem(title, rawDesc) {
        const codeBlocks = [];
        let cleanDesc = rawDesc.replace(/```[\s\S]*?```|`[\s\S]*?`/g, m => { codeBlocks.push(m); return `__CODE_${codeBlocks.length - 1}__`; });

        const fullTextLower = (title + " " + cleanDesc).toLowerCase().replace(/\*\*|__/g, '');
        const cInfo = getConstraintInfo((title + " " + rawDesc).toLowerCase());

        const m2 = findMatches(fullTextLower, dictionaries.step2);
        const m3 = findMatches(fullTextLower, dictionaries.step3);
        const m4 = rankMatches(fullTextLower, dictionaries.step4);
        const mS = findMatches(fullTextLower, dictionaries.space);

        const m4Hits = m4.flatMap(m => m.hits.map(kw => ({ matchedKeyword: kw, color: m.color })));
        let hlDesc = highlightKeywords(cleanDesc, [...m2, ...m3, ...m4Hits, ...mS]);
        codeBlocks.forEach((block, i) => hlDesc = hlDesc.replace(`__CODE_${i}__`, block));

        let algos = [...new Set(m4.map(m => m.category))];
        if (!algos.length) algos = m2.length ? ['Structure Traversal (See Step 2)'] : ['Ad-Hoc / Brute Force'];

        return { cInfo, m2, m3, m4, mS, hlDesc, algos };
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

    function analysisHTML({ cInfo, m2, m3, m4, mS, hlDesc, algos }, { hideDesc = false, hidePrediction = false } = {}) {
        const none = text => `<span class="step-none">${text}</span>`;
        const chips = matches => matches.map(m =>
            `<div>${m.category} <span class="trigger-word" style="background:${m.color}">${m.matchedKeyword}</span></div>`).join('');

        const predictions = algos.map(a => {
            const trigger = m4.find(m => m.category === a);
            const patterns = (algoPatterns[a] || []).map(p => `<span class="pattern-link" data-algo="${p.key}">${p.label}</span>`).join('');
            return `<div class="prediction-item">
                <span class="algo-tag" data-algo="${a}" style="background:${dictionaries.master[a]?.color || '#e2e8f0'}">${a}</span>
                ${trigger ? `<span class="matched-keywords">matched ${trigger.hits.map(kw => `<span class="trigger-word" style="background:${trigger.color}">"${kw}"</span>`).join('')}</span>` : ''}
                ${patterns ? `<div class="prediction-patterns">${patterns}</div>` : ''}
            </div>`;
        }).join('');

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
        const blocks = text.split(/^###\s+/m).filter(b => b.trim());
        document.querySelector('.preloaded-details > summary').textContent = `Practice Questions (${blocks.length})`;
        blocks.forEach(block => {
            const lines = block.split('\n');
            DOM.questions.appendChild(createQuestionCard(lines[0].trim(), lines.slice(1).join('\n').trim()));
        });
    }

    function renderMath(el = document.body) {
        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(el, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false });
        }
    }
});