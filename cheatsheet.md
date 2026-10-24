---
title: DSA
date: 2026-03-01 13:19:20
background: bg-[#F0893E]
tags:
  - algorithms
  - leetcode
  - data structures
categories:
  - Interview Prep
intro: |
  Leetcode Pattern Recognition
plugins:
  - copyCode
---

## Core Strategy

### Algorithms {.col-span-2}

| Algorithm | Best For | LeetCode |
| :--- | :--- | :--- |
| **HashMap & HashSet** | Counting, duplicates, fast lookups | <a href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noopener">#1</a>, <a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener">#217</a>, <a href="https://leetcode.com/problems/valid-anagram/" target="_blank" rel="noopener">#242</a>, <a href="https://leetcode.com/problems/group-anagrams/" target="_blank" rel="noopener">#49</a>, <a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank" rel="noopener">#347</a> |
| **Linked Lists** | Node traversal, cycles, reversal | <a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noopener">#206</a>, <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank" rel="noopener">#21</a>, <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener">#141</a>, <a href="https://leetcode.com/problems/reorder-list/" target="_blank" rel="noopener">#143</a>, <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener">#19</a> |
| **Stack and Queue** | Valid parentheses, undo operations, parsing nested structures | <a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener">#20</a>, <a href="https://leetcode.com/problems/min-stack/" target="_blank" rel="noopener">#155</a>, <a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener">#150</a>, <a href="https://leetcode.com/problems/daily-temperatures/" target="_blank" rel="noopener">#739</a>, <a href="https://leetcode.com/problems/implement-queue-using-stacks/" target="_blank" rel="noopener">#232</a> |
| **Two Pointers** | Sorted arrays, palindromes, pair sums | <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener">#125</a>, <a href="https://leetcode.com/problems/reverse-string/" target="_blank" rel="noopener">#344</a>, <a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener">#15</a>, <a href="https://leetcode.com/problems/container-with-most-water/" target="_blank" rel="noopener">#11</a>, <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank" rel="noopener">#167</a> |
| **Sliding Window** | Contiguous subarray/substring problems | <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" target="_blank" rel="noopener">#121</a>, <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener">#3</a>, <a href="https://leetcode.com/problems/longest-repeating-character-replacement/" target="_blank" rel="noopener">#424</a>, <a href="https://leetcode.com/problems/permutation-in-string/" target="_blank" rel="noopener">#567</a>, <a href="https://leetcode.com/problems/minimum-size-subarray-sum/" target="_blank" rel="noopener">#209</a> |
| **Binary Search** | Sorted data, finding a target/boundary | <a href="https://leetcode.com/problems/binary-search/" target="_blank" rel="noopener">#704</a>, <a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank" rel="noopener">#33</a>, <a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" target="_blank" rel="noopener">#153</a>, <a href="https://leetcode.com/problems/koko-eating-bananas/" target="_blank" rel="noopener">#875</a>, <a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank" rel="noopener">#34</a> |
| **Trees** | Hierarchical data, paths, level order | <a href="https://leetcode.com/problems/invert-binary-tree/" target="_blank" rel="noopener">#226</a>, <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noopener">#104</a>, <a href="https://leetcode.com/problems/same-tree/" target="_blank" rel="noopener">#100</a>, <a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener">#102</a>, <a href="https://leetcode.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener">#98</a> |
| **Heap & Priority Queue** | "Top K" elements, running median, sorting dynamically | <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank" rel="noopener">#215</a>, <a href="https://leetcode.com/problems/last-stone-weight/" target="_blank" rel="noopener">#1046</a>, <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank" rel="noopener">#973</a>, <a href="https://leetcode.com/problems/task-scheduler/" target="_blank" rel="noopener">#621</a>, <a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" target="_blank" rel="noopener">#703</a> |
| **Backtracking** | Generating all combinations, permutations, or subsets | <a href="https://leetcode.com/problems/subsets/" target="_blank" rel="noopener">#78</a>, <a href="https://leetcode.com/problems/permutations/" target="_blank" rel="noopener">#46</a>, <a href="https://leetcode.com/problems/combination-sum/" target="_blank" rel="noopener">#39</a>, <a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/" target="_blank" rel="noopener">#17</a>, <a href="https://leetcode.com/problems/word-search/" target="_blank" rel="noopener">#79</a> |
| **Graphs** | Connected components, islands, shortest paths, topological order | <a href="https://leetcode.com/problems/number-of-islands/" target="_blank" rel="noopener">#200</a>, <a href="https://leetcode.com/problems/clone-graph/" target="_blank" rel="noopener">#133</a>, <a href="https://leetcode.com/problems/course-schedule/" target="_blank" rel="noopener">#207</a>, <a href="https://leetcode.com/problems/flood-fill/" target="_blank" rel="noopener">#733</a>, <a href="https://leetcode.com/problems/pacific-atlantic-water-flow/" target="_blank" rel="noopener">#417</a> |
| **Dynamic Programming** | Optimization, counting ways, overlapping subproblems | <a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener">#70</a>, <a href="https://leetcode.com/problems/house-robber/" target="_blank" rel="noopener">#198</a>, <a href="https://leetcode.com/problems/coin-change/" target="_blank" rel="noopener">#322</a>, <a href="https://leetcode.com/problems/longest-increasing-subsequence/" target="_blank" rel="noopener">#300</a>, <a href="https://leetcode.com/problems/maximum-subarray/" target="_blank" rel="noopener">#53</a> |
| **Math & Geometry** | Digit manipulation, string-to-number conversions, mathematical mappings | <a href="https://leetcode.com/problems/reverse-integer/" target="_blank" rel="noopener">#7</a>, <a href="https://leetcode.com/problems/palindrome-number/" target="_blank" rel="noopener">#9</a>, <a href="https://leetcode.com/problems/roman-to-integer/" target="_blank" rel="noopener">#13</a>, <a href="https://leetcode.com/problems/integer-to-roman/" target="_blank" rel="noopener">#12</a>, <a href="https://leetcode.com/problems/rotate-image/" target="_blank" rel="noopener">#48</a> |

## Step 1: Time Constraints

### Small n ($\le 20$)

- Brute force approaches are viable
- Backtracking and recursion
- Exponential time complexity ($2^n$, $n!$) is acceptable
- Try all possible combinations/permutations

### Medium n ($10^3$ to $10^6$) {.row-span-2}

- ❌ No brute force solutions
- Linear time $O(n)$ or $O(n \log n)$ solutions
- Greedy algorithms
- Two pointers technique
- Heap-based solutions
- Dynamic programming

### Large n ($\ge 10^7$)

- ❌ No linear time solutions
- $O(\log n)$ solutions only
- Binary Search
- Mathematical formulas
- $O(1)$ constant time approaches

## Space Constraints

### O(1) Constant Space / In-Place {.row-span-2}

- "in-place"
- "constant space"
- "without extra space"
- "modify"
- "O(1) space"

### O(N) Linear Space / New Structure

- "new array"
- "return a new"
- "clone"
- "deep copy"

## Step 2: Analyze Input Format

### Tree / Binary Tree / BST {.row-span-2}

- **DFS:** all paths, recursive exploration, preorder/inorder/postorder
- **BFS:** level-by-level, shortest path in unweighted tree
- **Consider:** tree properties, parent-child relationships

### Graph (nodes + edges) {.row-span-2}

- **BFS:** shortest path
- **DFS:** connected components
- **Union Find:** "connected components" or "number of groups"
- **Topological Sort:** dependencies / ordering

### 2D Grid / Matrix

- **DFS/BFS:** "islands" problems
- **Union Find:** connected regions
- **DP:** path finding/optimization
- **Consider:** 4-directional or 8-directional movement

### Sorted Array

- Two pointers technique
- Binary search
- Greedy approach

### String

- **Two Pointers:** palindromes
- **Sliding Window:** substrings
- **Trie:** word dictionary problems
- **Stack:** parentheses/brackets

### Linked List

- Two pointers (fast/slow)
- Dummy node techniques
- Cycle detection

## Analyze Output Format

### List of Lists

*(combinations, subsets, paths)*
- **Backtracking** is almost always the answer
- Generate all possibilities
- Use recursion with choice/no-choice pattern

### Single Number

*(max/min profit, cost, ways, jumps)*
- **Dynamic Programming** for optimization
- **Greedy** for local optimal choices
- **Math** approach for counting

### Modified Array/String

*(in-place operations)*
- **Two Pointers** for in-place modifications (e.g., overwriting duplicates)

### Ordered List

*(sorted sequence, valid task order)*
- Sorting with custom comparators
- **Topological Sort** for dependencies
- **Heap** for maintaining order

## Step 3: Keyword Pattern Recognition

### HashMap & HashSet

- "frequency"
- "duplicate"
- "anagram"
- "complement"
- "indices"

### Two Pointers

- "palindrome"
- "sorted array"
- "remove duplicates"
- "most water"
- "pair sum"

### Binary Search

- "sorted"
- "kth element"
- "rotated"
- "first and last position"
- "minimize the maximum"

### Sliding Window

- "longest substring"
- "shortest substring"
- "subarray"
- "window"
- "contains all"

### Linked Lists

- "linked list"
- "listnode"
- "reverse linked list"
- "cycle in"
- "merge two sorted lists"

### Trees {.row-span-2}

- "binary tree"
- "BST"
- "level order"
- "root to leaf"
- "lowest common ancestor"