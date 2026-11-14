### Add Two Numbers
Given two non-empty linked lists representing two non-negative integers with the digits stored in reverse order and each node containing a single digit, add the two numbers and return as a linked list.
Constraints: `1 <= node count <= 100`

**Example:**
```text
Input (2 -> 4 -> 3) + (5 -> 6 -> 4) 
Output 7 -> 0 -> 8 
342 + 465 = 807
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

### Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Constraints: `1 <= s.length <= 1000`

**Example 1:**
```text
Input: "babad" 
Output: "bab" 
Note: "aba" is also a valid answer 
```

### ZigZag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: P A H N A P L S I I G Y I R And then read line by line: "PAHNAPLSIIGYIR". Write a code that will take a string and make this conversion given a number of rows.
Constraints: `1 <= s.length <= 1000`

**Example 1:**
```text
Input: s="PAYPALISHIRING", numRows=3
Output: "PAHNAPLSIIGYIR"
```

### String to Integer (atoi)
Implement atoi which converts a string to an integer. The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible and interprets them as a numerical value.
Constraints: `0 <= s.length <= 200`

**Example 1:**
```text
Input: "4193 with words "
Output: 4193
```

### Regular Expression Matching
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
'.' Matches any single character
'*' Matches zero or more of the preceding element 
The matching should cover the entire input string (not partial).
Constraints: `1 <= s.length <= 20`

**Example 1:**
```text
Input: 
	s="aab" 
	p="c*a*b" 
	Output: true
```

### Integer To Roman
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Roman numerals are usually written largest to smallest from left to right. Given an integer, convert it to a roman numeral, input is guaranteed to be within the range from 1 to 3999.
Constraints: `1 <= num <= 3999`

**Example 1:**
```text
Input: 1994
Output: "MCMXCIV"
Explanation: M=1000, CM=900, XC=90 and IV=4 
```

### Roman to Integer
Roman numerals are represented by seven different symbols I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
Constraints: `1 <= s.length <= 15`

**Example 1:**
```text
Input: "LVIII" 
Output: 58 
Explanation: L=50, V=5, III=3
```

### Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". All given inputs are in lowercase letters a-z.
Constraints: `1 <= strs.length <= 200`

**Example 1:**
```text
Input: ["flower", "flow", "flight"]
Output: "fl"
```

### 3Sum Closest
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution. 
Constraints: `3 <= nums.length <= 1000`

**Example:**
```text
Given array nums=[-1, 2, 1, -4], and target=1.
The sum that is closest to the target is 2. (-1+2+1=2)
```

### Letter Combinations of a Phone Number 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. 
Constraints: `0 <= digits.length <= 4`

**Example:**
```text
Input: "23" 
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]. 
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

### LRU Cache 
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put. get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1. put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item. Could both of these operations be done in O(1) time complexity?
Constraints: `1 <= capacity <= 3000`

**Example:**
```text
LRUCache cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1 
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
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

### Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.
Constraints: `1 <= n <= 5000`

**Example:**
```text
Input: nums = [3, 4, 5, 1, 2]
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

### Course Schedule II
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return the ordering of courses you should take to finish all courses. If it is impossible, return an empty array.
Constraints: `1 <= numCourses <= 2000`

**Example:**
```text
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0, 2, 1, 3]
```

### Number of Provinces
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c. A province is a group of directly or indirectly connected cities. Given an n x n matrix isConnected, return the total number of provinces.
Constraints: `1 <= n <= 200`

**Example:**
```text
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```

### Path With Minimum Effort
You are a hiker given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You start in the top-left cell and want to reach the bottom-right cell, moving up, down, left, or right. A route's effort is the maximum absolute difference in heights between two consecutive cells of the route. Return the minimum effort required.
Constraints: `1 <= rows, columns <= 100`

**Example:**
```text
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
```

### Combinations
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
Constraints: `1 <= n <= 20`

**Example:**
```text
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```

### Coin Change II
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
Constraints: `1 <= coins.length <= 300`

**Example:**
```text
Input: amount = 5, coins = [1, 2, 5]
Output: 4
```

### Unique Paths
There is a robot on an m x n grid. The robot starts at the top-left corner and tries to move to the bottom-right corner. It can only move either down or right at any point in time. Given m and n, return the number of possible unique paths the robot can take.
Constraints: `1 <= m, n <= 100`

**Example:**
```text
Input: m = 3, n = 7
Output: 28
```
