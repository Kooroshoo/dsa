document.addEventListener('DOMContentLoaded', () => {
    const DOM = {
        main: document.getElementById('main-container'),
        questions: document.getElementById('questions-container'),
        customResult: document.getElementById('custom-result'),
        modalOverlay: document.getElementById('template-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        titleInput: document.getElementById('custom-title'),
        descInput: document.getElementById('custom-desc')
    };

    const toId = text => text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Core Data Dictionaries
    let templates = {}, dictionaries = { step2: {}, step3: {}, step4: {}, space: {}, master: {} };
    const fallbackHTML = {
        step2: `<div class="solution-item"><span class="step-none">Standard Array / String / Math (No special data structure).</span></div>`,
        step3: `<div class="solution-item"><span class="step-none">Standard Value / Basic Array (No specific output format).</span></div>`,
        space: `<span class="step-none" style="margin-top:0.25rem; display:inline-block;">No strict space constraints detected (Assume O(N) is fine).</span>`
    };

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
        let grid = null, cardBody = null;

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
                const card = Object.assign(document.createElement('div'), { className: 'cheat-card' });
                card.innerHTML = `<div class="cheat-card-header">${cleanText}</div>`;
                card.appendChild(cardBody = Object.assign(document.createElement('div'), { className: 'cheat-card-body' }));
                grid.appendChild(card);
            } else if (cardBody) {
                if (node.tagName === 'TABLE') {
                    const wrap = Object.assign(document.createElement('div'), { className: 'table-wrapper' });
                    node.querySelectorAll('td:first-child').forEach(cell => {
                        const targetEl = cell.querySelector('strong') || cell;
                        let algoName = targetEl.textContent.trim();
                        if (algoName.includes('Heap')) algoName = 'Heap & Priority Queue';
                        targetEl.classList.add('table-algo-link');
                        targetEl.setAttribute('data-algo', algoName);
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

    function buildDictionaries() {
        // Preserving the vibrant pastel palette for the tags
        const palette = ['#fca5a5', '#fdba74', '#fde047', '#bef264', '#86efac', '#6ee7b7', '#67e8f9', '#7dd3fc', '#a5b4fc', '#d8b4fe', '#f0abfc', '#f9a8d4', '#fda4af'];
        let cIdx = 0;

        const extract = (sectionId, isStrict) => {
            const dict = {}, header = document.getElementById(sectionId);
            if (!header) return dict;
            let curr = header.nextElementSibling;
            while (curr && curr.tagName !== 'H2') {
                if (curr.classList.contains('grid-container')) {
                    curr.querySelectorAll('.cheat-card').forEach(card => {
                        const title = card.querySelector('.cheat-card-header').textContent.trim();
                        const items = Array.from(card.querySelectorAll('li')).map(el => el.textContent.trim());
                        const color = palette[cIdx++ % palette.length];
                        
                        const cardHeader = card.querySelector('.cheat-card-header');
                        cardHeader.style.backgroundColor = color; 
                        cardHeader.style.color = '#000';
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
                        dict[title] = { keywords: [...new Set(kws)].filter(k => k.length > 2), solutions: [title], color };
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

    function findMatches(text, dict) {
        const matches = [];
        for (const [cat, data] of Object.entries(dict)) {
            for (const kw of data.keywords) {
                if (!kw) continue;
                if (new RegExp(`(?<=\\W|^)(${escapeRegex(kw)}(?:es|s)?)(?=\\W|$)`, 'i').test(text)) {
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
            const regex = new RegExp(`(?<=\\W|^)(${escapeRegex(m.matchedKeyword)}(?:es|s)?)(?=\\W|$)`, 'gi');
            hlText = hlText.replace(regex, match => {
                placeholders.push(`<mark style="background-color: ${m.color};">${match}</mark>`);
                return `__MARK_${placeholders.length - 1}__`;
            });
        });
        placeholders.forEach((html, i) => hlText = hlText.replace(`__MARK_${i}__`, html));
        return hlText;
    }

    function formatMatches(matches, isInline = false) {
        if (!matches.length) return '';
        if (isInline) return matches.map(m => `<div style="margin-top:0.25rem;"><strong>${m.category}</strong> <span class="trigger-word" style="background:${m.color}">${m.matchedKeyword}</span></div>`).join('');
        return matches.map(m => `<div class="solution-item"><strong>${m.category}</strong> <span class="trigger-word" style="background:${m.color}">${m.matchedKeyword}</span></div>`).join('');
    }

    const createQuestionCard = (title, rawDesc) => {
        const codeBlocks = [];
        let cleanDesc = rawDesc.replace(/```[\s\S]*?```|`[\s\S]*?`/g, m => { codeBlocks.push(m); return `__CODE_${codeBlocks.length - 1}__`; });

        const fullTextLower = (title + " " + cleanDesc).toLowerCase();
        const cInfo = getConstraintInfo((title + " " + rawDesc).toLowerCase());

        const m2 = findMatches(fullTextLower, dictionaries.step2);
        const m3 = findMatches(fullTextLower, dictionaries.step3);
        const m4 = findMatches(fullTextLower, dictionaries.step4);
        const mS = findMatches(fullTextLower, dictionaries.space);

        let hlDesc = highlightKeywords(cleanDesc, [...m2, ...m3, ...m4, ...mS]);
        codeBlocks.forEach((block, i) => hlDesc = hlDesc.replace(`__CODE_${i}__`, block));

        let algos = [...new Set(m4.map(m => m.category))];
        if (!algos.length) algos = m2.length ? ['Structure Traversal (See Step 2)'] : ['Ad-Hoc / Brute Force'];

        const qDiv = document.createElement('div');
        qDiv.className = 'question-card';
        qDiv.innerHTML = `
            <h3>${title || "Custom Problem"}</h3>
            <div class="q-desc">${marked.parse(hlDesc)}</div>
            <div class="analysis-box">
                <h4>3-Step Analysis</h4>
                
                <div class="step-row">
                    <span class="step-label">Step 1: Constraints & Complexity</span>
                    <div class="step-val">
                        <div style="margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px dashed #cbd5e1;">
                            <strong style="color: var(--theme-color);">Time [ ${cInfo.str} ]:</strong> ${cInfo.html}
                        </div>
                        <div><strong style="color: var(--theme-color);">Space:</strong> ${formatMatches(mS, true) || fallbackHTML.space}</div>
                    </div>
                </div>
                
                <div class="step-row"><span class="step-label">Step 2: Input Format</span><div class="step-val">${formatMatches(m2) || fallbackHTML.step2}</div></div>
                <div class="step-row"><span class="step-label">Output Format</span><div class="step-val">${formatMatches(m3) || fallbackHTML.step3}</div></div>
                <div class="step-row"><span class="step-label">Step 3: Keyword Pattern</span><div class="step-val">${formatMatches(m4) || '<span class="step-none">No obvious trigger words found in the text.</span>'}</div></div>
                
                <details class="reveal-verdict"><summary>Reveal Predicted Approach</summary>
                    <div class="predicted-tags-container">
                        ${algos.map(a => `<span class="algo-tag" data-algo="${a}" style="background:${dictionaries.master[a]?.color || '#e2e8f0'}; color: #000;">${a}</span>`).join('')}
                        <div style="width:100%; text-align:center; font-size:0.8rem; color:#64748b; margin-top:10px;">(Click a tag to view template)</div>
                    </div>
                </details>
            </div>`;
        return qDiv;
    };

    // --- EVENT LISTENERS & RENDERERS ---
    function setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('algo-tag') || e.target.classList.contains('table-algo-link')) {
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
            if (!DOM.descInput.value.trim()) return alert("Please paste a problem description to analyze!");
            DOM.customResult.innerHTML = '';
            DOM.customResult.appendChild(createQuestionCard(DOM.titleInput.value.trim(), DOM.descInput.value.trim()));
            renderMath(DOM.customResult);
        });

        document.getElementById('clear-btn').addEventListener('click', () => {
            DOM.titleInput.value = DOM.descInput.value = DOM.customResult.innerHTML = '';
        });
    }

    function renderPreloadedQuestions(text) {
        if (!text) return DOM.questions.innerHTML = "<p>No questions found.</p>";
        DOM.questions.innerHTML = '';
        text.split(/^###\s+/m).filter(b => b.trim()).forEach(block => {
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