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

| Algorithm | Best For | Patterns | | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **HashMap & HashSet** | Fast lookup and membership checks | <span class="pattern-link" data-algo="Complement">Complement</span><span class="pattern-problems"><a href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noopener">#1</a></span> | <span class="pattern-link" data-algo="Seen">Seen</span><span class="pattern-problems"><a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener">#217</a></span> | <span class="pattern-link" data-algo="Frequency">Frequency</span><span class="pattern-problems"><a href="https://leetcode.com/problems/valid-anagram/" target="_blank" rel="noopener">#242</a> <a href="https://leetcode.com/problems/group-anagrams/" target="_blank" rel="noopener">#49</a> <a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank" rel="noopener">#347</a></span> |  |
| **Linked Lists** | Node traversal, cycles, reversal | <span class="pattern-link" data-algo="Linked List Reversal">Reversal</span><span class="pattern-problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noopener">#206</a></span> | <span class="pattern-link" data-algo="Merge Sorted Lists">Merge</span><span class="pattern-problems"><a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank" rel="noopener">#21</a></span> | <span class="pattern-link" data-algo="Fast & Slow Pointers">Fast & Slow</span><span class="pattern-problems"><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener">#141</a> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank" rel="noopener">#876</a> <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener">#19</a></span> |  |
| **Stack and Queue** | Valid parentheses, undo operations, parsing nested structures | <span class="pattern-link" data-algo="Matching Brackets">Matching Brackets</span><span class="pattern-problems"><a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener">#20</a></span> | <span class="pattern-link" data-algo="Monotonic Stack">Monotonic Stack</span><span class="pattern-problems"><a href="https://leetcode.com/problems/daily-temperatures/" target="_blank" rel="noopener">#739</a> <a href="https://leetcode.com/problems/next-greater-element-i/" target="_blank" rel="noopener">#496</a></span> | <span class="pattern-link" data-algo="Expression Evaluation">Expression Evaluation</span><span class="pattern-problems"><a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener">#150</a></span> |  |
| **Two Pointers** | Sorted arrays, palindromes, pair sums | <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span><span class="pattern-problems"><a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener">#125</a> <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank" rel="noopener">#167</a> <a href="https://leetcode.com/problems/container-with-most-water/" target="_blank" rel="noopener">#11</a> <a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener">#15</a></span> | <span class="pattern-link" data-algo="Same Direction">Same Direction</span><span class="pattern-problems"><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener">#26</a> <a href="https://leetcode.com/problems/move-zeroes/" target="_blank" rel="noopener">#283</a></span> |  |  |
| **Sliding Window** | Contiguous subarray/substring problems | <span class="pattern-link" data-algo="Variable Window">Variable Window</span><span class="pattern-problems"><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener">#3</a> <a href="https://leetcode.com/problems/longest-repeating-character-replacement/" target="_blank" rel="noopener">#424</a> <a href="https://leetcode.com/problems/minimum-size-subarray-sum/" target="_blank" rel="noopener">#209</a></span> | <span class="pattern-link" data-algo="Fixed Window">Fixed Window</span><span class="pattern-problems"><a href="https://leetcode.com/problems/permutation-in-string/" target="_blank" rel="noopener">#567</a> <a href="https://leetcode.com/problems/maximum-average-subarray-i/" target="_blank" rel="noopener">#643</a></span> |  |  |
| **Binary Search** | Sorted data, finding a target/boundary | <span class="pattern-link" data-algo="Classic Binary Search">Classic</span><span class="pattern-problems"><a href="https://leetcode.com/problems/binary-search/" target="_blank" rel="noopener">#704</a> <a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank" rel="noopener">#34</a></span> | <span class="pattern-link" data-algo="Rotated Sorted Array">Rotated Array</span><span class="pattern-problems"><a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank" rel="noopener">#33</a> <a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" target="_blank" rel="noopener">#153</a></span> | <span class="pattern-link" data-algo="Binary Search on Answer">On Answer</span><span class="pattern-problems"><a href="https://leetcode.com/problems/koko-eating-bananas/" target="_blank" rel="noopener">#875</a></span> |  |
| **Trees** | Hierarchical data, paths, level order | <span class="pattern-link" data-algo="Tree DFS">DFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/invert-binary-tree/" target="_blank" rel="noopener">#226</a> <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noopener">#104</a> <a href="https://leetcode.com/problems/same-tree/" target="_blank" rel="noopener">#100</a></span> | <span class="pattern-link" data-algo="Tree BFS">BFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener">#102</a> <a href="https://leetcode.com/problems/binary-tree-right-side-view/" target="_blank" rel="noopener">#199</a></span> | <span class="pattern-link" data-algo="Binary Search Tree">BST</span><span class="pattern-problems"><a href="https://leetcode.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener">#98</a> <a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" target="_blank" rel="noopener">#235</a></span> |  |
| **Heap & Priority Queue** | "Top K" elements, running median, sorting dynamically | <span class="pattern-link" data-algo="Top K">Top K</span><span class="pattern-problems"><a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank" rel="noopener">#215</a> <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank" rel="noopener">#973</a> <a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" target="_blank" rel="noopener">#703</a></span> | <span class="pattern-link" data-algo="Two Heaps">Two Heaps</span><span class="pattern-problems"><a href="https://leetcode.com/problems/find-median-from-data-stream/" target="_blank" rel="noopener">#295</a></span> | <span class="pattern-link" data-algo="K-Way Merge">K-Way Merge</span><span class="pattern-problems"><a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank" rel="noopener">#23</a></span> |  |
| **Backtracking** | Generating all combinations, permutations, or subsets | <span class="pattern-link" data-algo="Subsets">Subsets</span><span class="pattern-problems"><a href="https://leetcode.com/problems/subsets/" target="_blank" rel="noopener">#78</a> <a href="https://leetcode.com/problems/subsets-ii/" target="_blank" rel="noopener">#90</a></span> | <span class="pattern-link" data-algo="Permutations">Permutations</span><span class="pattern-problems"><a href="https://leetcode.com/problems/permutations/" target="_blank" rel="noopener">#46</a></span> | <span class="pattern-link" data-algo="Combinations">Combinations</span><span class="pattern-problems"><a href="https://leetcode.com/problems/combination-sum/" target="_blank" rel="noopener">#39</a> <a href="https://leetcode.com/problems/combinations/" target="_blank" rel="noopener">#77</a></span> |  |
| **Graphs** | Connected components, islands, shortest paths, topological order | <span class="pattern-link" data-algo="Graph DFS / BFS">DFS / BFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/number-of-islands/" target="_blank" rel="noopener">#200</a> <a href="https://leetcode.com/problems/flood-fill/" target="_blank" rel="noopener">#733</a> <a href="https://leetcode.com/problems/clone-graph/" target="_blank" rel="noopener">#133</a></span> | <span class="pattern-link" data-algo="Topological Sort">Topological Sort</span><span class="pattern-problems"><a href="https://leetcode.com/problems/course-schedule/" target="_blank" rel="noopener">#207</a> <a href="https://leetcode.com/problems/course-schedule-ii/" target="_blank" rel="noopener">#210</a></span> | <span class="pattern-link" data-algo="Union Find">Union Find</span><span class="pattern-problems"><a href="https://leetcode.com/problems/redundant-connection/" target="_blank" rel="noopener">#684</a> <a href="https://leetcode.com/problems/number-of-provinces/" target="_blank" rel="noopener">#547</a></span> |  |
| **Dynamic Programming** | Optimization, counting ways, overlapping subproblems | <span class="pattern-link" data-algo="1D DP">1D DP</span><span class="pattern-problems"><a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener">#70</a> <a href="https://leetcode.com/problems/house-robber/" target="_blank" rel="noopener">#198</a></span> | <span class="pattern-link" data-algo="Knapsack">Knapsack</span><span class="pattern-problems"><a href="https://leetcode.com/problems/coin-change/" target="_blank" rel="noopener">#322</a> <a href="https://leetcode.com/problems/coin-change-ii/" target="_blank" rel="noopener">#518</a></span> | <span class="pattern-link" data-algo="Longest Increasing Subsequence">LIS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/longest-increasing-subsequence/" target="_blank" rel="noopener">#300</a></span> | <span class="pattern-link" data-algo="Kadane's Algorithm">Kadane's</span><span class="pattern-problems"><a href="https://leetcode.com/problems/maximum-subarray/" target="_blank" rel="noopener">#53</a></span> |
| **Math & Geometry** | Digit manipulation, matrix operations, fast exponentiation | <span class="pattern-link" data-algo="Digit Manipulation">Digits</span><span class="pattern-problems"><a href="https://leetcode.com/problems/reverse-integer/" target="_blank" rel="noopener">#7</a> <a href="https://leetcode.com/problems/palindrome-number/" target="_blank" rel="noopener">#9</a></span> | <span class="pattern-link" data-algo="Matrix Traversal">Matrix</span><span class="pattern-problems"><a href="https://leetcode.com/problems/rotate-image/" target="_blank" rel="noopener">#48</a> <a href="https://leetcode.com/problems/spiral-matrix/" target="_blank" rel="noopener">#54</a></span> | <span class="pattern-link" data-algo="Fast Power">Fast Power</span><span class="pattern-problems"><a href="https://leetcode.com/problems/powx-n/" target="_blank" rel="noopener">#50</a></span> |  |

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

- **"anagram"**
- **"contains duplicate"**
- **"longest consecutive"**
- **"least recently used"**
- "appears at least twice"
- "every element is distinct"
- "add up to target"
- "indices of the two numbers"
- "subarrays whose sum"
- "sum equals"
- **"frequency"**
- "isomorphic"
- "non-repeating"
- "intersection"
- "number of times"
- "unique character"
- **"bijection"**
- **"distinct indices"**

### Two Pointers

- **"palindrome"**
- **"remove duplicates"**
- **"most water"**
- **"triplets"**
- **"trap"**
- **"palindromic"**
- "quadruplets"
- "three integers"
- **"already sorted"**
- "relative order"
- "in-place"
- "squares"
- "reverse"

### Sliding Window

- **"longest substring"**
- **"shortest substring"**
- **"minimum window"**
- **"contiguous subarray"**
- **"contains a permutation"**
- "consecutive 1"
- "at most k"
- "window"
- "subarray"
- **"size k"**
- **"length k"**
- "substring"

### Binary Search

- **"o(log"**
- **"log n"**
- **"minimize the number of calls"**
- "guess"
- **"rotated"**
- **"first and last position"**
- **"starting and ending position"**
- **"eating speed"**
- **"minimize the maximum"**
- "least weight capacity"
- "within h hours"
- "sorted"

### Linked Lists

- **"linked list"**
- **"listnode"**
- "linked-list"
- "head of"
- "next pointer"
- "cycle"

### Stack and Queue

- **"parentheses"**
- **"next greater"**
- **"reverse polish notation"**
- **"warmer temperature"**
- **"histogram"**
- "brackets"
- "monotonic"
- "stack"
- "queue"
- **"span"**
- "previous greater"
- "next smaller"
- "directory"
- "collision"

### Heap & Priority Queue

- **"kth largest"**
- **"kth smallest"**
- **"k closest"**
- **"top k"**
- **"k most frequent"**
- **"data stream"**
- **"merge k sorted"**
- **"k linked-list"**
- **"heaviest"**
- **"cpu"**
- "priority queue"
- "median"
- "rearrange"
- "most recent"

### Trees

- **"binary tree"**
- **"binary search tree"**
- "bst"
- "subtree"
- "level order"
- "lowest common ancestor"
- "leaf"
- "inorder"
- "preorder"

### Graphs

- **"graph"**
- **"island"**
- **"prerequisite"**
- **"flood fill"**
- **"4-directionally"**
- **"province"**
- "connected components"
- "directed edges"
- "network"
- "neighbors"
- "edges"
- "connected"
- **"connecting adjacent"**
- "transformation sequence"
- "region"
- **"cheapest"**
- "nearest"
- "cities"

### Backtracking

- **"all possible"**
- **"all the possible"**
- **"generate all"**
- **"power set"**
- **"unique combinations"**
- **"exists in the grid"**
- **"well-formed"**
- "permutation"
- "combination"
- "subset"
- **"n-queens"**
- **"distinct solutions"**
- "return all"
- **"sudoku"**

### Dynamic Programming

- **"distinct ways"**
- **"number of ways"**
- **"fewest"**
- **"make up that amount"**
- **"subsequence"**
- **"largest sum"**
- **"unique paths"**
- **"segmented"**
- **"partition"**
- **"robber"**
- **"reach the last index"**
- **"regular expression"**
- "maximum amount"
- "stock"
- **"staircase"**
- **"largest product"**
- "minimum number of operations"
- **"top-left"**
- **"top left"**
- **"number of possible"**
- **"interleaving"**

### Math & Geometry

- **"32-bit"**
- **"roman"**
- **"90 degrees"**
- **"spiral"**
- **"raised to the power"**
- **"binary representation"**
- **"except for one"**
- **"x is a palindrome"**
- **"integer is a palindrome"**
- "to an integer"
- "digit"
- **"power of"**
- **"prime"**
- **"square root"**
- **"factorial"**

### Trie (Prefix Tree)

- **"the trie"**
- **"a trie"**
- **"prefix tree"**
- **"startswith"**
- **"previously added"**
- "prefix"
- "dictionary"
