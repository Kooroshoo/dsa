## HashMap & HashSet

### First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Constraints: `1 <= s.length <= 10^5`

**Example:**
```text
Input: s = "leetcode"
Output: 0
```

### Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.
Constraints: `1 <= ransomNote.length, magazine.length <= 10^5`

**Example:**
```text
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

### Isomorphic Strings
Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character.
Constraints: `1 <= s.length <= 5 * 10^4`

**Example:**
```text
Input: s = "egg", t = "add"
Output: true
```

### Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
Constraints: `0 <= nums.length <= 10^5`

**Example:**
```text
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive sequence is [1, 2, 3, 4].
```

### Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k. A subarray is a contiguous non-empty sequence of elements within an array.
Constraints: `1 <= nums.length <= 2 * 10^4`

**Example:**
```text
Input: nums = [1, 1, 1], k = 2
Output: 2
```

## Linked Lists

### Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Constraints: `0 <= node count <= 300`

**Example:**
```text
Input: 1 -> 1 -> 2
Output: 1 -> 2
```

### Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Constraints: `1 <= node count <= 10^5`

**Example:**
```text
Input: 1 -> 2 -> 2 -> 1
Output: true
```

### Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
Constraints: `1 <= m, n <= 3 * 10^4`

**Example:**
```text
Input: listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5]
Output: Intersected at node 8
```

### Add Two Numbers
Given two non-empty linked lists representing two non-negative integers with the digits stored in reverse order and each node containing a single digit, add the two numbers and return as a linked list.
Constraints: `1 <= node count <= 100`

**Example:**
```text
Input (2 -> 4 -> 3) + (5 -> 6 -> 4) 
Output 7 -> 0 -> 8 
342 + 465 = 807
```

### Reorder List
You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
Constraints: `1 <= node count <= 5 * 10^4`

**Example:**
```text
Input: 1 -> 2 -> 3 -> 4
Output: 1 -> 4 -> 2 -> 3
```

## Stack and Queue

### Implement Queue using Stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
Constraints: `1 <= x <= 9, at most 100 calls`

**Example:**
```text
push(1), push(2), peek() -> 1, pop() -> 1, empty() -> false
```

### Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Constraints: `at most 3 * 10^4 calls`

**Example:**
```text
push(-2), push(0), push(-3), getMin() -> -3, pop(), top() -> 0, getMin() -> -2
```

### Simplify Path
You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path. A single period '.' represents the current directory. A double period '..' represents the previous/parent directory.
Constraints: `1 <= path.length <= 3000`

**Example:**
```text
Input: path = "/home//foo/"
Output: "/home/foo"
```

### Decode String
Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
Constraints: `1 <= s.length <= 30`

**Example:**
```text
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

### Asteroid Collision
We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction. Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode.
Constraints: `2 <= asteroids.length <= 10^4`

**Example:**
```text
Input: asteroids = [5, 10, -5]
Output: [5, 10]
```

## Two Pointers

### Reverse String
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.
Constraints: `1 <= s.length <= 10^5`

**Example:**
```text
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]
```

### Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
Constraints: `1 <= nums.length <= 10^4`

**Example:**
```text
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
```

### Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should be stored inside the array nums1.
Constraints: `0 <= m, n <= 200`

**Example:**
```text
Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
Output: [1, 2, 2, 3, 5, 6]
```

### 3Sum Closest
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution. 
Constraints: `3 <= nums.length <= 1000`

**Example:**
```text
Given array nums=[-1, 2, 1, -4], and target=1.
The sum that is closest to the target is 2. (-1+2+1=2)
```

### 4Sum
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target. The solution set must not contain duplicate quadruplets.
Constraints: `1 <= nums.length <= 200`

**Example:**
```text
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0
A solution set is: 
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## Sliding Window

### Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Constraints: `1 <= nums.length <= 10^5`

**Example:**
```text
Input: nums = [1, 2, 3, 1], k = 3
Output: true
```

### Maximum Number of Vowels in a Substring of Given Length
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Constraints: `1 <= s.length <= 10^5`

**Example:**
```text
Input: s = "abciiidef", k = 3
Output: 3
```

### Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Constraints: `1 <= nums.length <= 10^5`

**Example:**
```text
Input: target = 7, nums = [2, 3, 1, 2, 4, 3]
Output: 2
Explanation: The subarray [4, 3] has the minimal length.
```

### Max Consecutive Ones III
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Constraints: `1 <= nums.length <= 10^5`

**Example:**
```text
Input: nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
Output: 6
```

### Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
Constraints: `1 <= s.length, p.length <= 3 * 10^4`

**Example:**
```text
Input: s = "cbaebabacd", p = "abc"
Output: [0, 6]
```

## Binary Search

### Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.
Constraints: `1 <= nums.length <= 10^4`

**Example:**
```text
Input: nums = [1, 3, 5, 6], target = 5
Output: 2
```

### Guess Number Higher or Lower
We are playing the Guess Game. I pick a number from 1 to n. You have to guess which number I picked. Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
Constraints: `1 <= pick <= n <= 2^31 - 1`

**Example:**
```text
Input: n = 10, pick = 6
Output: 6
```

### Search a 2D Matrix
You are given an m x n integer matrix with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise. You must write a solution in O(log(m * n)) time complexity.
Constraints: `1 <= m, n <= 100`

**Example:**
```text
Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
Output: true
```

### Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.
Constraints: `1 <= n <= 5000`

**Example:**
```text
Input: nums = [3, 4, 5, 1, 2]
Output: 1
```

### Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.
Constraints: `nums1.length + nums2.length <= 2000`

**Example 1:**
```text
nums1 = [1, 3] 
nums2 = [2]
The median is 2.0
```

## Trees

### Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
Constraints: `1 <= node count <= 10^4`

**Example:**
```text
Input: root = [1, 2, 3, 4, 5]
Output: 3
```

### Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
Constraints: `0 <= node count <= 5000`

**Example:**
```text
Input: root = [3, 9, 20, null, null, 15, 7]
Output: true
```

### Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
Constraints: `1 <= node count <= 2000`

**Example:**
```text
Input: root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
Output: true
```

### Kth Smallest Element in a BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
Constraints: `1 <= k <= n <= 10^4`

**Example:**
```text
Input: root = [3, 1, 4, null, 2], k = 1
Output: 1
```

### Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
Constraints: `2 <= node count <= 10^5`

**Example:**
```text
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
Output: 6
```

## Heap & Priority Queue

### Last Stone Weight
You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. At the end of the game, there is at most one stone left. Return the weight of the last remaining stone.
Constraints: `1 <= stones.length <= 30`

**Example:**
```text
Input: stones = [2, 7, 4, 1, 8, 1]
Output: 1
```

### Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string. Return the sorted string.
Constraints: `1 <= s.length <= 5 * 10^5`

**Example:**
```text
Input: s = "tree"
Output: "eert"
```

### Reorganize String
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same. Return any possible rearrangement of s or return "" if not possible.
Constraints: `1 <= s.length <= 500`

**Example:**
```text
Input: s = "aab"
Output: "aba"
```

### Task Scheduler
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there is a constraint: there has to be a gap of at least n intervals between two tasks with the same label. Return the minimum number of CPU intervals required to complete all tasks.
Constraints: `1 <= tasks.length <= 10^4`

**Example:**
```text
Input: tasks = ["A", "A", "A", "B", "B", "B"], n = 2
Output: 8
```

### Design Twitter
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
Constraints: `1 <= userId <= 500`

**Example:**
```text
postTweet(1, 5), getNewsFeed(1) -> [5]
follow(1, 2), postTweet(2, 6), getNewsFeed(1) -> [6, 5]
```

## Backtracking

### Combinations
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
Constraints: `1 <= n <= 20`

**Example:**
```text
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```

### Permutations II
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
Constraints: `1 <= nums.length <= 8`

**Example:**
```text
Input: nums = [1, 1, 2]
Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
```

### Letter Combinations of a Phone Number 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. 
Constraints: `0 <= digits.length <= 4`

**Example:**
```text
Input: "23" 
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]. 
```

### Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Constraints: `1 <= n <= 8`

**Example:**
```text
Given n=3, a solution set is: 
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

### Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
Constraints: `1 <= m, n <= 6`

**Example:**
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

## Graphs

### Max Area of Island
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical). The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid.
Constraints: `1 <= m, n <= 50`

**Example:**
```text
Input: grid = [[0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 1, 0]]
Output: 4
```

### Rotting Oranges
You are given an m x n grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange.
Constraints: `1 <= m, n <= 10`

**Example:**
```text
Input: grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
Output: 4
```

### Number of Provinces
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c. A province is a group of directly or indirectly connected cities. Given an n x n matrix isConnected, return the total number of provinces.
Constraints: `1 <= n <= 200`

**Example:**
```text
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```

### Course Schedule II
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return the ordering of courses you should take to finish all courses. If it is impossible, return an empty array.
Constraints: `1 <= numCourses <= 2000`

**Example:**
```text
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0, 2, 1, 3]
```

### Path With Minimum Effort
You are a hiker given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You start in the top-left cell and want to reach the bottom-right cell, moving up, down, left, or right. A route's effort is the maximum absolute difference in heights between two consecutive cells of the route. Return the minimum effort required.
Constraints: `1 <= rows, columns <= 100`

**Example:**
```text
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
```

## Dynamic Programming

### Min Cost Climbing Stairs
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.
Constraints: `2 <= cost.length <= 1000`

**Example:**
```text
Input: cost = [10, 15, 20]
Output: 15
```

### Unique Paths
There is a robot on an m x n grid. The robot starts at the top-left corner and tries to move to the bottom-right corner. It can only move either down or right at any point in time. Given m and n, return the number of possible unique paths the robot can take.
Constraints: `1 <= m, n <= 100`

**Example:**
```text
Input: m = 3, n = 7
Output: 28
```

### Coin Change II
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
Constraints: `1 <= coins.length <= 300`

**Example:**
```text
Input: amount = 5, coins = [1, 2, 5]
Output: 4
```

### Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.
Constraints: `1 <= s.length <= 300`

**Example:**
```text
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
```

### Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Constraints: `1 <= s.length <= 1000`

**Example 1:**
```text
Input: "babad" 
Output: "bab" 
Note: "aba" is also a valid answer 
```

## Math & Geometry

### Plus One
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one and return the resulting array of digits.
Constraints: `1 <= digits.length <= 100`

**Example:**
```text
Input: digits = [1, 2, 3]
Output: [1, 2, 4]
```

### Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false. An integer n is a power of three, if there exists an integer x such that n == 3^x.
Constraints: `-2^31 <= n <= 2^31 - 1`

**Example:**
```text
Input: n = 27
Output: true
```

### Happy Number
Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1, or it loops endlessly in a cycle which does not include 1.
Constraints: `1 <= n <= 2^31 - 1`

**Example:**
```text
Input: n = 19
Output: true
Explanation: 1^2 + 9^2 = 82 -> 68 -> 100 -> 1
```

### Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.
Constraints: `1 <= m, n <= 10`

**Example:**
```text
Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

### Set Matrix Zeroes
Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.
Constraints: `1 <= m, n <= 200`

**Example:**
```text
Input: matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
```
