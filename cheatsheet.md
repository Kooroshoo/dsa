---
title: DSA
date: 2026-03-01 13:19:20
background: bg-[#FDBA74]
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

| Algorithm | Best For |
| :--- | :--- |
| **HashMap & HashSet** | Counting, duplicates, fast lookups |
| **Two Pointers** | Sorted arrays, palindromes, pair sums |
| **Binary Search** | Sorted data, finding a target/boundary |
| **Sliding Window** | Contiguous subarray/substring problems |
| **Linked Lists** | Node traversal, cycles, reversal |
| **Trees + DFS/BFS** | Hierarchical data, paths, level order |

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

### Trees + DFS/BFS {.row-span-2}

- "binary tree"
- "BST"
- "level order"
- "root to leaf"
- "lowest common ancestor"