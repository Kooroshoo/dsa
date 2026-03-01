document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    const questionsContainer = document.getElementById('questions-container');
    const toId = text => text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');

    const extractClasses = (str) => {
        const match = str.match(/\{\s*((?:\.[a-zA-Z0-9_-]+\s*)+)\}/);
        return match 
            ? { clean: str.replace(match[0], '').trim(), classes: match[1].split('.').map(c => c.trim()).filter(Boolean), matched: match[0] } 
            : { clean: str, classes: [], matched: null };
    };

    Promise.all([
        fetch('cheatsheet.md').then(res => res.text()),
        fetch('questions.md').then(res => res.ok ? res.text() : null)
    ]).then(([cheatText, questionsText]) => {
        
        // --- 1. RENDER CHEAT SHEET ---
        const match = cheatText.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/);
        let mdContent = cheatText;
        
        if (match) {
            const yaml = match[1];
            const getVal = regex => (yaml.match(regex) || [])[1]?.trim();
            const pageTitle = getVal(/title:\s*(.*)/) || 'Cheat Sheet';
            document.getElementById('page-title').innerText = pageTitle;
            document.title = pageTitle; 
            const introText = getVal(/intro:\s*\|\r?\n\s*(.*)/) || '';
            document.getElementById('page-intro').innerHTML = marked.parseInline(introText);
            const bgStr = getVal(/background:\s*(.*)/);
            if (bgStr) document.documentElement.style.setProperty('--theme-color', bgStr.replace(/^bg-\[?|\]?$/g, ''));
            mdContent = cheatText.replace(match[0], '').trim();
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = marked.parse(mdContent);
        let grid = null, cardBody = null;

        Array.from(tempDiv.children).forEach(node => {
            if (node.tagName === 'H2') {
                const rawText = node.textContent.replace(/\{.*?\}/g, '').trim();
                const { clean, classes } = extractClasses(node.innerHTML);
                const title = Object.assign(document.createElement('h2'), { className: 'section-title', innerHTML: clean, id: toId(rawText) });
                grid = Object.assign(document.createElement('div'), { className: ['grid-container', ...classes].join(' ') });
                mainContainer.append(title, grid);
            } 
            else if (node.tagName === 'H3') {
                if (!grid) mainContainer.appendChild(grid = Object.assign(document.createElement('div'), { className: 'grid-container' }));
                const rawText = node.textContent.replace(/\{.*?\}/g, '').trim();
                const { clean, classes } = extractClasses(node.innerHTML);
                const card = Object.assign(document.createElement('div'), { className: ['cheat-card', ...classes].join(' '), id: toId(rawText) });
                card.appendChild(Object.assign(document.createElement('div'), { className: 'cheat-card-header', innerHTML: clean }));
                card.appendChild(cardBody = Object.assign(document.createElement('div'), { className: 'cheat-card-body' }));
                grid.appendChild(card);
            } 
            else if (cardBody) {
                const attrMatch = node.textContent.trim().match(/^\{\s*((?:\.[a-zA-Z0-9_-]+\s*)+)\}$/);
                if (node.tagName === 'P' && attrMatch && cardBody.lastElementChild) {
                    cardBody.lastElementChild.classList.add(...attrMatch[1].split('.').map(c => c.trim()).filter(Boolean));
                    return;
                }
                if (node.tagName === 'TABLE') {
                    const wrap = Object.assign(document.createElement('div'), { className: 'table-wrapper' });
                    wrap.appendChild(node);
                    cardBody.appendChild(wrap);
                } 
                else if (node.tagName === 'PRE') {
                    const wrap = Object.assign(document.createElement('div'), { className: 'code-wrapper' });
                    const btn = Object.assign(document.createElement('button'), { className: 'copy-btn', textContent: 'Copy' });
                    btn.onclick = () => navigator.clipboard.writeText(node.innerText).then(() => {
                        btn.textContent = 'Copied!'; btn.classList.add('copied');
                        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
                    });
                    wrap.append(btn, node);
                    cardBody.appendChild(wrap);
                } 
                else {
                    cardBody.appendChild(node);
                }
            }
        });

        if (typeof Prism !== 'undefined') Prism.highlightAll();

        // --- 2. EXTRACT RULES & ASSIGN COLORS ---
        const colorPalette = ['#fca5a5', '#fdba74', '#fde047', '#bef264', '#86efac', '#6ee7b7', '#67e8f9', '#7dd3fc', '#a5b4fc', '#d8b4fe', '#f0abfc', '#f9a8d4', '#fda4af'];
        let colorIdx = 0;

        const buildDictWithSolutions = (sectionId, isStrictKeywordMatch = false) => {
            const dict = {};
            const header = document.getElementById(sectionId);
            if (!header) return dict;
            
            let curr = header.nextElementSibling;
            while (curr && curr.tagName !== 'H2') {
                if (curr.classList.contains('grid-container')) {
                    curr.querySelectorAll('.cheat-card').forEach(card => {
                        const title = card.querySelector('.cheat-card-header').textContent.replace(/\{.*?\}/g, '').trim();
                        const listItems = Array.from(card.querySelectorAll('li')).map(el => el.textContent.replace(/\s+/g, ' ').trim());
                        const italicItems = Array.from(card.querySelectorAll('em, i')).map(el => el.textContent.toLowerCase().trim().replace(/["'\(\)]/g, ''));
                        
                        let keywords = [];
                        let solutions = [];
                        let catColor = colorPalette[colorIdx % colorPalette.length];
                        colorIdx++;

                        const cardHeader = card.querySelector('.cheat-card-header');
                        if (cardHeader) {
                            cardHeader.style.backgroundColor = catColor;
                            cardHeader.style.color = '#000';
                            cardHeader.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
                        }

                        if (isStrictKeywordMatch) {
                            keywords = listItems.map(s => s.toLowerCase().replace(/["']/g, ''));
                            solutions = [title];
                        } else {
                            keywords = [title.toLowerCase(), ...italicItems.flatMap(i => i.split(', '))];
                            solutions = listItems;
                            if (title.includes('Grid') || title.includes('Matrix')) keywords.push('grid', 'matrix', 'board', '2d array', 'm x n');
                            if (title.includes('Tree')) keywords.push('binary tree', 'bst', 'leaf node', 'root node', 'tree'); 
                            if (title.includes('Graph')) keywords.push('graph', 'edges', 'vertices', 'directed');
                            if (title.includes('Sorted Array')) keywords.push('sorted array', 'non-decreasing', 'ascending order');
                            if (title.includes('Single Number')) keywords.push('return the minimum', 'return the maximum', 'length of');
                            if (title.includes('List of Lists')) keywords.push('all possible', 'return all');
                            if (title.includes('Modified Array')) keywords.push('in-place', 'modify nums');
                            if (title.includes('Linked List')) keywords.push('linked list', 'listnode', 'next node', 'node');
                            keywords = keywords.filter(k => k.length > 2);
                        }
                        
                        dict[title] = { keywords: [...new Set(keywords)].filter(k => k.length > 2), solutions: solutions, color: catColor };
                    });
                }
                curr = curr.nextElementSibling;
            }
            return dict;
        };

        const step2Dict = buildDictWithSolutions('step-2-analyze-input-format', false);
        const step3Dict = buildDictWithSolutions('step-3-analyze-output-format', false);
        const step4Dict = buildDictWithSolutions('step-4-keyword-pattern-recognition', true);
        const spaceDict = buildDictWithSolutions('step-1-space-constraints', true);
        
        const masterDict = { ...step2Dict, ...step3Dict, ...step4Dict, ...spaceDict };

        const findMatches = (text, dict) => {
            const matches = [];
            const textLower = text.toLowerCase();
            for (const [category, data] of Object.entries(dict)) {
                for (const kw of data.keywords) {
                    if (!kw) continue;
                    const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`(?<=\\W|^)(${escapeRegExp(kw)}(?:es|s)?)(?=\\W|$)`, 'i');
                    if (regex.test(textLower)) {
                        matches.push({ category, solutions: data.solutions, matchedKeyword: kw, color: data.color });
                        break; 
                    }
                }
            }
            return matches;
        };

        const formatStepMatches = (matches, isStrictFormat = false) => {
            if (!matches || matches.length === 0) return '';
            if (isStrictFormat) {
                return matches.map(m => `<div style="margin-top: 0.25rem;"><strong>${m.category}</strong> <span class="trigger-word" style="background-color: ${m.color}; color: #000; border-color: rgba(0,0,0,0.1);">(Triggered by: "${m.matchedKeyword}")</span></div>`).join('');
            }
            return matches.map(m => `
                <div class="solution-item">
                    <strong>If ${m.category}</strong> <span class="trigger-word" style="background-color: ${m.color}; color: #000; border-color: rgba(0,0,0,0.1);">(Triggered by: "${m.matchedKeyword}")</span>:
                    <ul>${m.solutions.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>`).join('');
        };

        const step2FallbackHtml = `<div class="solution-item"><span class="step-none" style="display:block; margin-bottom:0.5rem;">Standard Array / String / Math (No special data structure detected).</span></div>`;
        const step3FallbackHtml = `<div class="solution-item"><span class="step-none" style="display:block; margin-bottom:0.5rem;">Standard Value / Basic Array (No specific output format detected).</span></div>`;

        // --- 3. ANALYZE QUESTIONS & HIGHLIGHT TEXT ---
        if (questionsText) {
            questionsContainer.innerHTML = '';
            const questionBlocks = questionsText.split(/^###\s+/m).filter(block => block.trim() !== '');

            questionBlocks.forEach(block => {
                const lines = block.split('\n');
                const qTitle = lines[0].trim();
                const qDescRaw = lines.slice(1).join('\n').trim();

                const codeBlocks = [];
                let qDescClean = qDescRaw.replace(/```[\s\S]*?```|`[\s\S]*?`/g, (match) => {
                    const token = `__CODE_BLOCK_${codeBlocks.length}__`;
                    codeBlocks.push(match);
                    return token;
                });

                const fullText = (qTitle + " " + qDescClean);
                const fullTextLower = fullText.toLowerCase();
                const fullTextRawLower = (qTitle + " " + qDescRaw).toLowerCase();

                let constraintStr = "Unknown";
                let step1Solutions = "Assume Medium constraints: $O(N)$ or $O(N \\log N)$ approaches.";
                
                if (/-?2\^31/.test(fullTextRawLower) || /-?10\^9/.test(fullTextRawLower)) {
                    constraintStr = "Large Values (32-bit Int)"; step1Solutions = "<strong>Math, Bit Manipulation</strong>. Watch out for integer overflow!";
                } else if (/10\^7|10\^8|10000000/.test(fullTextRawLower)) {
                    constraintStr = "Large ($\\ge 10^7$)"; step1Solutions = "<strong>Binary Search, Math, $O(1)$ formulas</strong> only.";
                } else if (/10\^4|10\^5|10\^6|10000(?!\d)|10\*\*4|10\*\*5/.test(fullTextRawLower)) {
                    constraintStr = "Medium ($10^4$ to $10^6$)"; step1Solutions = "<strong>Two Pointers, Greedy, DP, Sliding Window, Heaps</strong>. No brute force.";
                } else if (/(?:<=|<|==|=)\s*(1000|2000|3000|3999|[1-9][0-9]{2})(?!\d|\^|\*)/.test(fullTextRawLower)) {
                    constraintStr = "Medium-Small ($n \\le 10^3$)"; step1Solutions = "<strong>$O(N^2)$ approaches like DP or Nested Loops</strong> might pass.";
                } else if (/(?:<=|<|==|=)\s*(20|15|10|50|100|[1-9][0-9]?)(?!\d|\^|\*)/.test(fullTextRawLower)) {
                    constraintStr = "Small ($n \\le 100$)"; step1Solutions = "<strong>Brute Force, Backtracking, Recursion</strong> are highly viable.";
                }

                const s2 = findMatches(fullText, step2Dict);
                const s3 = findMatches(fullText, step3Dict);
                const s4 = findMatches(fullText, step4Dict);
                const sSpace = findMatches(fullText, spaceDict);

                // HIGHLIGHTING THE TEXT dynamically
                let highlightedDesc = qDescClean;
                const allMatches = [...s2, ...s3, ...s4, ...sSpace];
                
                allMatches.sort((a, b) => b.matchedKeyword.length - a.matchedKeyword.length);
                const placeholders = [];

                allMatches.forEach((m) => {
                    if (m.matchedKeyword && m.color) {
                        const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        const regex = new RegExp(`(?<=\\W|^)(${escapeRegExp(m.matchedKeyword)}(?:es|s)?)(?=\\W|$)`, 'gi');
                        
                        highlightedDesc = highlightedDesc.replace(regex, (match) => {
                            const token = `__MARK_TOKEN_${placeholders.length}__`;
                            placeholders.push(`<mark style="background-color: ${m.color};">${match}</mark>`);
                            return token;
                        });
                    }
                });

                placeholders.forEach((html, idx) => {
                    highlightedDesc = highlightedDesc.replace(`__MARK_TOKEN_${idx}__`, html);
                });

                codeBlocks.forEach((block, idx) => {
                    highlightedDesc = highlightedDesc.replace(`__CODE_BLOCK_${idx}__`, block);
                });

                // BUILD TAGS
                let finalAlgos = [];
                if (s4.length > 0) {
                    finalAlgos.push(...s4.map(m => m.category));
                }
                finalAlgos = [...new Set(finalAlgos)]; 
                
                if (finalAlgos.length === 0) {
                    if (s2.length > 0) {
                        finalAlgos = ['Structure Traversal (See Step 2)'];
                    } else {
                        finalAlgos = ['Ad-Hoc / Brute Force'];
                    }
                }

                const qDiv = document.createElement('div');
                qDiv.className = 'question-card';
                
                let tagsHtml = finalAlgos.map(algo => {
                    const catData = masterDict[algo];
                    const bg = catData && catData.color ? catData.color : '#e2e8f0';
                    return `<span class="algo-tag" style="background-color: ${bg}; color: #000;">${algo}</span>`;
                }).join('');

                const step2Html = s2.length ? formatStepMatches(s2) : step2FallbackHtml;
                const step3Html = s3.length ? formatStepMatches(s3) : step3FallbackHtml;
                const step4Html = s4.length ? formatStepMatches(s4, true) : '<span class="step-none">No obvious trigger words found in the text.</span>';
                
                // Formatted Space String
                const spaceHtml = sSpace.length ? formatStepMatches(sSpace, true) : '<span class="step-none" style="margin-top:0.25rem; display:inline-block;">No strict space constraints detected (Assume O(N) is fine).</span>';

                qDiv.innerHTML = `
                    <h3>${qTitle}</h3>
                    <div class="q-desc">${marked.parse(highlightedDesc)}</div>
                    
                    <div class="analysis-box">
                        <h4>🤖 4-Step Analysis</h4>
                        
                        <div class="step-row step-column">
                            <span class="step-label">Step 1: Constraints & Complexity</span>
                            <div class="step-val text-val" style="width: 100%;">
                                <div style="margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px dashed #cbd5e1;">
                                    <strong style="color: var(--theme-color);">⏱️ Time [ ${constraintStr} ]:</strong> ${step1Solutions}
                                </div>
                                <div>
                                    <strong style="color: var(--theme-color);">💾 Space:</strong> ${spaceHtml}
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-row step-column">
                            <span class="step-label">Step 2: Input Formatting</span>
                            <div class="step-val text-val">${step2Html}</div>
                        </div>
                        <div class="step-row step-column">
                            <span class="step-label">Step 3: Output Formatting</span>
                            <div class="step-val text-val">${step3Html}</div>
                        </div>
                        <div class="step-row step-column">
                            <span class="step-label">Step 4: Keyword Triggers</span>
                            <div class="step-val text-val">${step4Html}</div>
                        </div>
                        
                        <details class="reveal-verdict">
                            <summary>Reveal Predicted Approach</summary>
                            <div class="predicted-tags-container">
                                ${tagsHtml}
                            </div>
                        </details>
                    </div>
                `;
                questionsContainer.appendChild(qDiv);
            });
        } else {
            questionsContainer.innerHTML = "<p>No questions.md file found to analyze.</p>";
        }

        // --- 4. RENDER ALL MATH AT ONCE ---
        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        }

    }).catch(console.error);
});