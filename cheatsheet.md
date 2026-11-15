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
| **Linked Lists** | Node traversal, cycles, reversal | <span class="pattern-link" data-algo="Linked List Reversal">Reversal</span><span class="pattern-problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noopener">#206</a></span> | <span class="pattern-link" data-algo="Merge Sorted Lists">Merge</span><span class="pattern-problems"><a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank" rel="noopener">#21</a></span> | <span class="pattern-link" data-algo="Fast & Slow Pointers">Fast & Slow</span><span class="pattern-problems"><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank" rel="noopener">#876</a> <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener">#141</a> <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener">#19</a></span> |  |
| **Stack and Queue** | Valid parentheses, undo operations, parsing nested structures | <span class="pattern-link" data-algo="Matching Brackets">Matching Brackets</span><span class="pattern-problems"><a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener">#20</a></span> | <span class="pattern-link" data-algo="Monotonic Stack">Monotonic Stack</span><span class="pattern-problems"><a href="https://leetcode.com/problems/next-greater-element-i/" target="_blank" rel="noopener">#496</a> <a href="https://leetcode.com/problems/daily-temperatures/" target="_blank" rel="noopener">#739</a></span> | <span class="pattern-link" data-algo="Expression Evaluation">Expression Evaluation</span><span class="pattern-problems"><a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener">#150</a></span> |  |
| **Two Pointers** | Sorted arrays, palindromes, pair sums | <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span><span class="pattern-problems"><a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener">#125</a> <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank" rel="noopener">#167</a> <a href="https://leetcode.com/problems/container-with-most-water/" target="_blank" rel="noopener">#11</a> <a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener">#15</a></span> | <span class="pattern-link" data-algo="Same Direction">Same Direction</span><span class="pattern-problems"><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener">#26</a> <a href="https://leetcode.com/problems/move-zeroes/" target="_blank" rel="noopener">#283</a></span> |  |  |
| **Sliding Window** | Contiguous subarray/substring problems | <span class="pattern-link" data-algo="Variable Window">Variable Window</span><span class="pattern-problems"><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener">#3</a> <a href="https://leetcode.com/problems/longest-repeating-character-replacement/" target="_blank" rel="noopener">#424</a></span> | <span class="pattern-link" data-algo="Fixed Window">Fixed Window</span><span class="pattern-problems"><a href="https://leetcode.com/problems/maximum-average-subarray-i/" target="_blank" rel="noopener">#643</a> <a href="https://leetcode.com/problems/permutation-in-string/" target="_blank" rel="noopener">#567</a></span> |  |  |
| **Binary Search** | Sorted data, finding a target/boundary | <span class="pattern-link" data-algo="Classic Binary Search">Classic</span><span class="pattern-problems"><a href="https://leetcode.com/problems/binary-search/" target="_blank" rel="noopener">#704</a> <a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank" rel="noopener">#34</a></span> | <span class="pattern-link" data-algo="Rotated Sorted Array">Rotated Array</span><span class="pattern-problems"><a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank" rel="noopener">#33</a></span> | <span class="pattern-link" data-algo="Binary Search on Answer">On Answer</span><span class="pattern-problems"><a href="https://leetcode.com/problems/koko-eating-bananas/" target="_blank" rel="noopener">#875</a></span> |  |
| **Trees** | Hierarchical data, paths, level order | <span class="pattern-link" data-algo="Tree DFS">DFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/same-tree/" target="_blank" rel="noopener">#100</a> <a href="https://leetcode.com/problems/invert-binary-tree/" target="_blank" rel="noopener">#226</a> <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noopener">#104</a></span> | <span class="pattern-link" data-algo="Tree BFS">BFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener">#102</a> <a href="https://leetcode.com/problems/binary-tree-right-side-view/" target="_blank" rel="noopener">#199</a></span> | <span class="pattern-link" data-algo="Binary Search Tree">BST</span><span class="pattern-problems"><a href="https://leetcode.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener">#98</a></span> |  |
| **Heap & Priority Queue** | "Top K" elements, running median, sorting dynamically | <span class="pattern-link" data-algo="Top K">Top K</span><span class="pattern-problems"><a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" target="_blank" rel="noopener">#703</a> <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank" rel="noopener">#215</a> <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank" rel="noopener">#973</a></span> | <span class="pattern-link" data-algo="Two Heaps">Two Heaps</span><span class="pattern-problems"><a href="https://leetcode.com/problems/find-median-from-data-stream/" target="_blank" rel="noopener">#295</a></span> | <span class="pattern-link" data-algo="K-Way Merge">K-Way Merge</span><span class="pattern-problems"><a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank" rel="noopener">#23</a></span> |  |
| **Backtracking** | Generating all combinations, permutations, or subsets | <span class="pattern-link" data-algo="Subsets">Subsets</span><span class="pattern-problems"><a href="https://leetcode.com/problems/subsets/" target="_blank" rel="noopener">#78</a> <a href="https://leetcode.com/problems/subsets-ii/" target="_blank" rel="noopener">#90</a></span> | <span class="pattern-link" data-algo="Permutations">Permutations</span><span class="pattern-problems"><a href="https://leetcode.com/problems/permutations/" target="_blank" rel="noopener">#46</a></span> | <span class="pattern-link" data-algo="Combinations">Combinations</span><span class="pattern-problems"><a href="https://leetcode.com/problems/combination-sum/" target="_blank" rel="noopener">#39</a></span> |  |
| **Graphs** | Connected components, islands, shortest paths, topological order | <span class="pattern-link" data-algo="Graph DFS / BFS">DFS / BFS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/flood-fill/" target="_blank" rel="noopener">#733</a> <a href="https://leetcode.com/problems/number-of-islands/" target="_blank" rel="noopener">#200</a> <a href="https://leetcode.com/problems/clone-graph/" target="_blank" rel="noopener">#133</a></span> | <span class="pattern-link" data-algo="Topological Sort">Topological Sort</span><span class="pattern-problems"><a href="https://leetcode.com/problems/course-schedule/" target="_blank" rel="noopener">#207</a></span> | <span class="pattern-link" data-algo="Union Find">Union Find</span><span class="pattern-problems"><a href="https://leetcode.com/problems/redundant-connection/" target="_blank" rel="noopener">#684</a></span> | <span class="pattern-link" data-algo="Dijkstra's Algorithm">Dijkstra</span><span class="pattern-problems"><a href="https://leetcode.com/problems/network-delay-time/" target="_blank" rel="noopener">#743</a></span> |
| **Dynamic Programming** | Optimization, counting ways, overlapping subproblems | <span class="pattern-link" data-algo="1D DP">1D DP</span><span class="pattern-problems"><a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener">#70</a> <a href="https://leetcode.com/problems/house-robber/" target="_blank" rel="noopener">#198</a> <a href="https://leetcode.com/problems/maximum-subarray/" target="_blank" rel="noopener">#53</a></span> | <span class="pattern-link" data-algo="Knapsack">Knapsack</span><span class="pattern-problems"><a href="https://leetcode.com/problems/coin-change/" target="_blank" rel="noopener">#322</a></span> | <span class="pattern-link" data-algo="Longest Increasing Subsequence">LIS</span><span class="pattern-problems"><a href="https://leetcode.com/problems/longest-increasing-subsequence/" target="_blank" rel="noopener">#300</a></span> | <span class="pattern-link" data-algo="2D DP">2D DP</span><span class="pattern-problems"><a href="https://leetcode.com/problems/longest-common-subsequence/" target="_blank" rel="noopener">#1143</a> <a href="https://leetcode.com/problems/edit-distance/" target="_blank" rel="noopener">#72</a></span> |
| **Math & Geometry** | Digit manipulation, matrix operations, fast exponentiation | <span class="pattern-link" data-algo="Digit Manipulation">Digits</span><span class="pattern-problems"><a href="https://leetcode.com/problems/palindrome-number/" target="_blank" rel="noopener">#9</a> <a href="https://leetcode.com/problems/reverse-integer/" target="_blank" rel="noopener">#7</a></span> | <span class="pattern-link" data-algo="Matrix Traversal">Matrix</span><span class="pattern-problems"><a href="https://leetcode.com/problems/rotate-image/" target="_blank" rel="noopener">#48</a></span> | <span class="pattern-link" data-algo="Fast Power">Fast Power</span><span class="pattern-problems"><a href="https://leetcode.com/problems/powx-n/" target="_blank" rel="noopener">#50</a></span> |  |

## How to Plan {.solver}

### Limits :: Input size and memory?

**Size**

- Small (n < 10³) | Two loops are fine
- Large (n ≥ 10³) | One loop, or sort first | <span class="pattern-link" data-algo="Binary Search">Binary Search</span> <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span>

**Memory**

- Constant (O(1)) | Change the input in place | <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> <span class="pattern-link" data-algo="Binary Search">Binary Search</span>
- Linear (O(n)) | Store what you have seen | <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span>

### Shape :: Input and output?

**Input**

- Number | Work digit by digit | <span class="pattern-link" data-algo="Math & Geometry">Math & Geometry</span>
- Array / string | Hash map, window or pointers | <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span>
- Sorted array | Halve the range (or a range of answers) | <span class="pattern-link" data-algo="Binary Search">Binary Search</span> <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span>
- Linked list | Move pointers; a dummy head helps | <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span>
- Tree | Recurse left and right | <span class="pattern-link" data-algo="Trees">Trees</span>
- Graph | Visit neighbours, mark visited (grids too) | <span class="pattern-link" data-algo="Graphs">Graphs</span>

**Output**

- Same as input | Change it in place
- True / false | Stop as soon as you know
- Indices / values | Find them in one pass
- Array of arrays | Build each combination step by step | <span class="pattern-link" data-algo="Backtracking">Backtracking</span>

### Brute force :: What to check?

**Check**

- Each item | One loop is enough |  | Use your input’s usual tool
- Pairs | Check every pair | <span class="pattern-link" data-algo="Complement">Complement</span> <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span> <span class="pattern-link" data-algo="Seen">Seen</span> <span class="pattern-link" data-algo="Frequency">Frequency</span> <span class="pattern-link" data-algo="Same Direction">Same Direction</span> | Hash map, or two pointers if sorted
- Subarrays | Check every start and end | <span class="pattern-link" data-algo="Variable Window">Variable Window</span> <span class="pattern-link" data-algo="Fixed Window">Fixed Window</span> <span class="pattern-link" data-algo="1D DP">1D DP</span> | Slide a window (best sum: DP)
- Subsets | Try every combination | <span class="pattern-link" data-algo="1D DP">1D DP</span> <span class="pattern-link" data-algo="2D DP">2D DP</span> <span class="pattern-link" data-algo="Knapsack">Knapsack</span> <span class="pattern-link" data-algo="Longest Increasing Subsequence">LIS</span> <span class="pattern-link" data-algo="Subsets">Subsets</span> <span class="pattern-link" data-algo="Permutations">Permutations</span> <span class="pattern-link" data-algo="Combinations">Combinations</span> | Backtrack; cache repeats (DP)
- Top k | Sort everything, take k | <span class="pattern-link" data-algo="Top K">Top K</span> <span class="pattern-link" data-algo="K-Way Merge">K-Way Merge</span> <span class="pattern-link" data-algo="Two Heaps">Two Heaps</span> | Keep a heap of size k
- Matching | Find each item’s partner: ( ) or next bigger | <span class="pattern-link" data-algo="Matching Brackets">Matching Brackets</span> <span class="pattern-link" data-algo="Expression Evaluation">Expression Evaluation</span> <span class="pattern-link" data-algo="Monotonic Stack">Monotonic Stack</span> | Use a stack
- Math | Convert digits to a string, copy the matrix | <span class="pattern-link" data-algo="Digit Manipulation">Digits</span> <span class="pattern-link" data-algo="Matrix Traversal">Matrix</span> <span class="pattern-link" data-algo="Fast Power">Fast Power</span> | Use % 10, bit tricks or index math

### Examples

#### HashMap · Two Sum

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> › <span class="pattern-link" data-algo="Complement">Complement</span> → store each number, look up target − x · O(n)

#### HashMap · Contains Duplicate

- **Limits:** Large · Linear
- **Shape:** Array / string → True / false
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> › <span class="pattern-link" data-algo="Seen">Seen</span> → add to a set, stop on a repeat · O(n)

#### HashMap · Valid Anagram

- **Limits:** Large · Linear
- **Shape:** Array / string → True / false
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> › <span class="pattern-link" data-algo="Frequency">Frequency</span> → count letters in both, compare · O(n)

#### HashMap · Group Anagrams

- **Limits:** Large · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="HashMap & HashSet">HashMap & HashSet</span> › <span class="pattern-link" data-algo="Frequency">Frequency</span> → key = sorted word, group in a map · O(n·k log k)

#### Heap · Top K Frequent Elements

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="Top K">Top K</span> → count in a hash map, keep the top k in a heap · O(n log k)

#### Linked Lists · Reverse Linked List

- **Limits:** Large · Constant
- **Shape:** Linked list → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span> › <span class="pattern-link" data-algo="Linked List Reversal">Reversal</span> → flip each next pointer · O(n)

#### Linked Lists · Merge Two Sorted Lists

- **Limits:** Large · Constant
- **Shape:** Linked list → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span> › <span class="pattern-link" data-algo="Merge Sorted Lists">Merge</span> → dummy head, always take the smaller node · O(n + m)

#### Linked Lists · Middle of the Linked List

- **Limits:** Large · Constant
- **Shape:** Linked list → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span> › <span class="pattern-link" data-algo="Fast & Slow Pointers">Fast & Slow</span> → slow moves 1, fast moves 2; slow ends in the middle · O(n)

#### Linked Lists · Linked List Cycle

- **Limits:** Large · Constant
- **Shape:** Linked list → True / false
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span> › <span class="pattern-link" data-algo="Fast & Slow Pointers">Fast & Slow</span> → if fast meets slow, there is a cycle · O(n)

#### Linked Lists · Remove Nth Node From End

- **Limits:** Large · Constant
- **Shape:** Linked list → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Linked Lists">Linked Lists</span> › <span class="pattern-link" data-algo="Fast & Slow Pointers">Fast & Slow</span> → fast goes n ahead, then both move · O(n)

#### Stack · Valid Parentheses

- **Limits:** Large · Linear
- **Shape:** Array / string → True / false
- **Brute force:** Matching
- **Plan:** <span class="pattern-link" data-algo="Stack and Queue">Stack and Queue</span> › <span class="pattern-link" data-algo="Matching Brackets">Matching Brackets</span> → push opens, pop on the matching close · O(n)

#### Stack · Next Greater Element I

- **Limits:** Small · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Matching
- **Plan:** <span class="pattern-link" data-algo="Stack and Queue">Stack and Queue</span> › <span class="pattern-link" data-algo="Monotonic Stack">Monotonic Stack</span> → stack of waiting items, pop when a bigger one arrives · O(n)

#### Stack · Daily Temperatures

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Matching
- **Plan:** <span class="pattern-link" data-algo="Stack and Queue">Stack and Queue</span> › <span class="pattern-link" data-algo="Monotonic Stack">Monotonic Stack</span> → stack of waiting days, pop when a warmer one arrives · O(n)

#### Stack · Evaluate Reverse Polish Notation

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Matching
- **Plan:** <span class="pattern-link" data-algo="Stack and Queue">Stack and Queue</span> › <span class="pattern-link" data-algo="Expression Evaluation">Expression Evaluation</span> → push numbers, pop two on each operator · O(n)

#### Two Pointers · Valid Palindrome

- **Limits:** Large · Constant
- **Shape:** Array / string → True / false
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span> → compare from both ends, move inward · O(n)

#### Two Pointers · Two Sum II

- **Limits:** Large · Constant
- **Shape:** Sorted array → Indices / values
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span> → sum too big: move right in; too small: move left in · O(n)

#### Two Pointers · Container With Most Water

- **Limits:** Large · Constant
- **Shape:** Array / string → Indices / values
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span> → move the shorter wall inward · O(n)

#### Two Pointers · 3Sum

- **Limits:** Large · Constant
- **Shape:** Array / string → Array of arrays
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Opposite Ends">Opposite Ends</span> → sort, fix one number, two pointers for the rest · O(n²)

#### Two Pointers · Remove Duplicates from Sorted Array

- **Limits:** Large · Constant
- **Shape:** Sorted array → Same as input
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Same Direction">Same Direction</span> → slow pointer writes, fast pointer reads · O(n)

#### Two Pointers · Move Zeroes

- **Limits:** Large · Constant
- **Shape:** Array / string → Same as input
- **Brute force:** Pairs
- **Plan:** <span class="pattern-link" data-algo="Two Pointers">Two Pointers</span> › <span class="pattern-link" data-algo="Same Direction">Same Direction</span> → slow pointer writes non-zeros, fast reads · O(n)

#### Sliding Window · Longest Substring Without Repeats

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subarrays
- **Plan:** <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> › <span class="pattern-link" data-algo="Variable Window">Variable Window</span> → grow right, shrink left on a repeat · O(n)

#### Sliding Window · Longest Repeating Character Replacement

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subarrays
- **Plan:** <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> › <span class="pattern-link" data-algo="Variable Window">Variable Window</span> → grow right, shrink left when changes > k · O(n)

#### Sliding Window · Maximum Average Subarray I

- **Limits:** Large · Constant
- **Shape:** Array / string → Indices / values
- **Brute force:** Subarrays
- **Plan:** <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> › <span class="pattern-link" data-algo="Fixed Window">Fixed Window</span> → add the new item, drop the oldest · O(n)

#### Sliding Window · Permutation in String

- **Limits:** Large · Linear
- **Shape:** Array / string → True / false
- **Brute force:** Subarrays
- **Plan:** <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> › <span class="pattern-link" data-algo="Fixed Window">Fixed Window</span> → slide a window of len(s1), compare counts · O(n)

#### Binary Search · Binary Search

- **Limits:** Large · Constant
- **Shape:** Sorted array → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Binary Search">Binary Search</span> › <span class="pattern-link" data-algo="Classic Binary Search">Classic</span> → halve the range each step · O(log n)

#### Binary Search · First and Last Position of Element

- **Limits:** Large · Constant
- **Shape:** Sorted array → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Binary Search">Binary Search</span> › <span class="pattern-link" data-algo="Classic Binary Search">Classic</span> → binary search twice: leftmost, then rightmost · O(log n)

#### Binary Search · Search in Rotated Sorted Array

- **Limits:** Large · Constant
- **Shape:** Sorted array → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Binary Search">Binary Search</span> › <span class="pattern-link" data-algo="Rotated Sorted Array">Rotated Array</span> → one half is always sorted: search that half · O(log n)

#### Binary Search · Koko Eating Bananas

- **Limits:** Large · Constant
- **Shape:** Sorted array → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Binary Search">Binary Search</span> › <span class="pattern-link" data-algo="Binary Search on Answer">On Answer</span> → binary search the speed, check if it finishes in time · O(n log m)

#### Trees · Same Tree

- **Limits:** Small · Linear
- **Shape:** Tree → True / false
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Tree DFS">DFS</span> → compare node, then left and right · O(n)

#### Trees · Invert Binary Tree

- **Limits:** Small · Linear
- **Shape:** Tree → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Tree DFS">DFS</span> → swap left and right at every node · O(n)

#### Trees · Maximum Depth of Binary Tree

- **Limits:** Large · Linear
- **Shape:** Tree → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Tree DFS">DFS</span> → 1 + max(depth(left), depth(right)) · O(n)

#### Trees · Binary Tree Level Order Traversal

- **Limits:** Large · Linear
- **Shape:** Tree → Array of arrays
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Tree BFS">BFS</span> → queue, process one level at a time · O(n)

#### Trees · Binary Tree Right Side View

- **Limits:** Small · Linear
- **Shape:** Tree → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Tree BFS">BFS</span> → BFS, keep the last node of each level · O(n)

#### Trees · Validate Binary Search Tree

- **Limits:** Large · Linear
- **Shape:** Tree → True / false
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Trees">Trees</span> › <span class="pattern-link" data-algo="Binary Search Tree">BST</span> → pass down min and max for each node · O(n)

#### Heap · Kth Largest Element in a Stream

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="Top K">Top K</span> → min-heap of size k; its top is the answer · O(log k) per add

#### Heap · Kth Largest Element in an Array

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="Top K">Top K</span> → keep a min-heap of size k · O(n log k)

#### Heap · K Closest Points to Origin

- **Limits:** Large · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="Top K">Top K</span> → max-heap of size k by distance · O(n log k)

#### Heap · Find Median from Data Stream

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="Two Heaps">Two Heaps</span> → max-heap for the low half, min-heap for the high half · O(log n) per add

#### Heap · Merge k Sorted Lists

- **Limits:** Large · Linear
- **Shape:** Linked list → Same as input
- **Brute force:** Top k
- **Plan:** <span class="pattern-link" data-algo="Heap & Priority Queue">Heap & Priority Queue</span> › <span class="pattern-link" data-algo="K-Way Merge">K-Way Merge</span> → heap of the k heads, pop the smallest · O(n log k)

#### Backtracking · Subsets

- **Limits:** Small · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Backtracking">Backtracking</span> › <span class="pattern-link" data-algo="Subsets">Subsets</span> → take it, recurse, undo, skip it · O(2ⁿ)

#### Backtracking · Subsets II

- **Limits:** Small · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Backtracking">Backtracking</span> › <span class="pattern-link" data-algo="Subsets">Subsets</span> → sort, then skip equal neighbours · O(2ⁿ)

#### Backtracking · Permutations

- **Limits:** Small · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Backtracking">Backtracking</span> › <span class="pattern-link" data-algo="Permutations">Permutations</span> → pick each unused number, recurse, undo · O(n!)

#### Backtracking · Combination Sum

- **Limits:** Small · Linear
- **Shape:** Array / string → Array of arrays
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Backtracking">Backtracking</span> › <span class="pattern-link" data-algo="Combinations">Combinations</span> → reuse a number or move on, stop past target · O(2ᵗ)

#### Graphs · Flood Fill

- **Limits:** Small · Linear
- **Shape:** Graph → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Graph DFS / BFS">DFS / BFS</span> → DFS from the start, recolour matching cells · O(m·n)

#### Graphs · Number of Islands

- **Limits:** Large · Linear
- **Shape:** Graph → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Graph DFS / BFS">DFS / BFS</span> → flood-fill each new land cell, count the fills · O(m·n)

#### Graphs · Clone Graph

- **Limits:** Small · Linear
- **Shape:** Graph → Same as input
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Graph DFS / BFS">DFS / BFS</span> → DFS with a map: old node → copy · O(V + E)

#### Graphs · Course Schedule

- **Limits:** Large · Linear
- **Shape:** Graph → True / false
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Topological Sort">Topological Sort</span> → take courses with no prerequisites first · O(V + E)

#### Graphs · Redundant Connection

- **Limits:** Large · Linear
- **Shape:** Graph → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Union Find">Union Find</span> → join edges; the first already-joined edge is the answer · O(n)

#### Graphs · Network Delay Time

- **Limits:** Small · Linear
- **Shape:** Graph → Indices / values
- **Brute force:** Each item
- **Plan:** <span class="pattern-link" data-algo="Graphs">Graphs</span> › <span class="pattern-link" data-algo="Dijkstra's Algorithm">Dijkstra</span> → heap of (time, node), always expand the closest · O(E log V)

#### DP · Climbing Stairs

- **Limits:** Small · Linear
- **Shape:** Number → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="1D DP">1D DP</span> → ways(i) = ways(i−1) + ways(i−2) · O(n)

#### DP · House Robber

- **Limits:** Small · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="1D DP">1D DP</span> → best(i) = max(skip, take + best(i−2)) · O(n)

#### DP · Maximum Subarray

- **Limits:** Large · Constant
- **Shape:** Array / string → Indices / values
- **Brute force:** Subarrays
- **Plan:** <span class="pattern-link" data-algo="Sliding Window">Sliding Window</span> or <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="1D DP">1D DP</span> → negative numbers break a window, so use DP: extend the sum or restart at each item · O(n)

#### DP · Coin Change

- **Limits:** Small · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="Knapsack">Knapsack</span> → fewest(a) = 1 + min(fewest(a − coin)) · O(n·amount)

#### DP · Longest Increasing Subsequence

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="Longest Increasing Subsequence">LIS</span> → lis(i) = 1 + max lis(j) for smaller earlier j · O(n²)

#### DP · Longest Common Subsequence

- **Limits:** Large · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="2D DP">2D DP</span> → match: 1 + diagonal; else max(up, left) · O(m·n)

#### DP · Edit Distance

- **Limits:** Small · Linear
- **Shape:** Array / string → Indices / values
- **Brute force:** Subsets
- **Plan:** <span class="pattern-link" data-algo="Dynamic Programming">Dynamic Programming</span> › <span class="pattern-link" data-algo="2D DP">2D DP</span> → 1 + min(insert, delete, replace) · O(m·n)

#### Math · Palindrome Number

- **Limits:** Large · Constant
- **Shape:** Number → True / false
- **Brute force:** Math
- **Plan:** <span class="pattern-link" data-algo="Math & Geometry">Math & Geometry</span> › <span class="pattern-link" data-algo="Digit Manipulation">Digits</span> → reverse half the digits, compare · O(log x)

#### Math · Reverse Integer

- **Limits:** Large · Constant
- **Shape:** Number → Same as input
- **Brute force:** Math
- **Plan:** <span class="pattern-link" data-algo="Math & Geometry">Math & Geometry</span> › <span class="pattern-link" data-algo="Digit Manipulation">Digits</span> → pop digits with % 10, push with × 10 · O(log x)

#### Math · Rotate Image

- **Limits:** Small · Constant
- **Shape:** Graph → Same as input
- **Brute force:** Math
- **Plan:** <span class="pattern-link" data-algo="Math & Geometry">Math & Geometry</span> › <span class="pattern-link" data-algo="Matrix Traversal">Matrix</span> → transpose, then reverse each row · O(n²)

#### Math · Pow(x, n)

- **Limits:** Large · Constant
- **Shape:** Number → Indices / values
- **Brute force:** Math
- **Plan:** <span class="pattern-link" data-algo="Math & Geometry">Math & Geometry</span> › <span class="pattern-link" data-algo="Fast Power">Fast Power</span> → square x and halve n each step · O(log n)


## Step 1: Time Constraints {.hidden}

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

## Space Constraints {.hidden}

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

## Step 2: Analyze Input Format {.hidden}

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

## Analyze Output Format {.hidden}

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

## Step 3: Keyword Pattern Recognition {.hidden}

### HashMap & HashSet

- **"anagram"**
- **"encode a list of strings"**
- **"except nums[i]"**
- **"board is valid"**
- **"majority element"**
- **"getrandom"**
- **"palindrome that can be built"**
- "majority"
- **"pair of indices"**
- **"indices i and j"**
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
- "letters from"

### Two Pointers

- **"palindrome"**
- **"into a single array"**
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
- **"abs(i - j) <= k"**
- **"anagrams in"**
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
- **"timestamp"**
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
- **"only one repeated number"**
- **"listnode"**
- "linked-list"
- "head of"
- "next pointer"
- "cycle"

### Stack and Queue

- **"parentheses"**
- **"car fleet"**
- **"calculator"**
- "catch up"
- "valid expression"
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
- **"capital"**
- **"k pairs"**
- **"based on the frequency"**
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
- **"itinerary"**
- **"swim"**
- **"alien"**
- **"order of the letters"**
- **"equations"**
- **"snake"**
- **"ladder"**
- **"mutation"**
- **"belong to the same person"**
- "tickets"
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
- **"weighted"**
- **"shortest path"**
- **"minimum effort"**

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
- **"number of different expressions"**
- **"increasing path"**
- **"burst"**
- **"maximum possible sum"**
- **"transaction"**
- **"largest square"**
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
- **"biginteger"**
- **"represented as strings"**
- **"axis-aligned square"**
- **"stream of points"**
- **"same straight line"**
- **"binary string"**
- **"missing"**
- **"bits"**
- **"without using the operators"**
- **"+ and - operators"**
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
- "sum of the squares"
- "matrix"

### Trie (Prefix Tree)

- **"the trie"**
- **"a trie"**
- **"prefix tree"**
- **"startswith"**
- **"previously added"**
- "prefix"
- "dictionary"
