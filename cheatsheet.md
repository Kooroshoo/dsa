---
title: Leetcode Pattern Recognition
date: 2026-03-01 13:19:20
background: bg-[#FFA116]
tags:
  - algorithms
  - leetcode
  - data structures
categories:
  - Interview Prep
intro: |
  Print this out, keep it by you, but not during your interview 😉
plugins:
  - copyCode
---

## Core Strategy: Top Algorithms & Selection

### The "Big 6" Algorithms {.col-span-2}

| Algorithm | Best For | Typical Complexity |
| :--- | :--- | :--- |
| **DFS / BFS** | Trees, Graphs, Matrices, Combinations | $O(V + E)$ or $O(N)$ |
| **Sliding Window** | Contiguous subarrays/substrings | $O(N)$ |
| **Two Pointers** | Sorted arrays, palindromes, linked lists | $O(N)$ |
| **Binary Search** | Sorted data, finding a target, monotonic functions | $O(\log n)$ |
| **Dynamic Programming**| Optimization, counting ways, overlapping subproblems | $O(N)$ to $O(N^2)$ |
| **Heap / Priority Queue**| Top K elements, median, scheduling | $O(N \log K)$ |

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

## Step 1: Space Constraints

### O(1) Constant Space / In-Place {.row-span-2}

[Image of In-place algorithm swapping array elements without using extra memory]

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

## Step 3: Analyze Output Format

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

## Step 4: Keyword Pattern Recognition

### Dynamic Programming {.row-span-2}

- "Number of ways"
- "Maximum/minimum"
- "sum/profit/cost"
- "longest palindromic"
- "Optimal" or "best"

### Two Pointers

- "Palindrome"
- "Sorted array"
- "target"
- "Remove duplicates"
- "most water"

### Heap & Priority Queue

- "K largest" or "K smallest"
- "Top K elements"
- "Median"
- "Priority"

### Stack

- "Parentheses" or "brackets"
- "Valid expression"
- "Nested structure"
- "Undo operations"

### Monotonic Stack

- "Next greater element"
- "Next smaller element"

### HashMap / HashSet

- "Count frequency"
- "Find duplicates"
- "Anagram"
- "indices"
- "complements"

### Trie (Prefix Tree)

- "Word search"
- "Word prefixes"
- "Dictionary matches"
- "common prefix"

### Sliding Window {.row-span-2}

[Image of sliding window subarray visualization]

- "longest substring"
- "shortest substring"
- "Subarray"
- "Maximum/minimum window"
- "Contains all"

### Binary Search {.row-span-2}

- "Kth element"
- "Search in sorted"
- "Minimize maximum"
- "First/last occurrence"

### Math & Geometry

- "Greatest/Least Common Denominator"
- "Prime numbers"
- "Angle calculations"
- "overflow"
- "roman numeral"
- "atoi"

### Game Theory

- "Optimal strategy"
- "Win/lose scenarios"
- "Minimax"

### Bit Manipulation

- "XOR" operations
- "Single number" problems
- "Power of 2"

### Union Find

- "Connected components"
- "Number of groups"

### Greedy

- "Minimum operations"
- "Local optima to global optima"