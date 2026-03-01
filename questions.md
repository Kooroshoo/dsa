### Two Sum
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.
You may assume that each input would have **exactly one solution**, and you may not use the same element twice.
Constraints: `2 <= nums.length <= 10^4`

**Example:**
```text
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
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

### Longest Substring Without Repeating Characters
Given a string find the length of the longest substring without repeating characters. 
Constraints: `0 <= s.length <= 5 * 10^4`

**Example 1:**
```text
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3
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

### Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer. For the purpose of this problem assume that your function returns 0 when the reversed integer overflows.
Constraints: `-2^31 <= x <= 2^31 - 1`

**Example 1:**
```text
Input: 123
Output: 321
```

### String to Integer (atoi)
Implement atoi which converts a string to an integer. The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible and interprets them as a numerical value.
Constraints: `0 <= s.length <= 200`

**Example 1:**
```text
Input: "4193 with words "
Output: 4193
```

### Palindrome Number
Determines whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Constraints: `-2^31 <= x <= 2^31 - 1`

**Example 1:**
```text
Input: -121
Output: false 
Explanation: From left to right, it reads -121, meanwhile from right to left it becomes 121-. Therefore it is not a palindrome
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

### Container with the Most Water
Given n non negative integers a1,a2, ... , an where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container such that the container contains the most water.
Constraints: `n == height.length, 2 <= n <= 10^5`

**Example:**
```text
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
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

### 3Sum
Given an array "nums" of n integers, are there elements a, b, c in nums such that a+b+c=0? Find all unique triplets in the array which gives the sum of zero. The solution set must not contain duplicate triplets.
Constraints: `0 <= nums.length <= 3000`

**Example:**
```text
Given array nums = [-1, 0, 1, 2, -1, -4]. 
A solution set is: 
[
  [-1, 0, 1],
  [-1, -1, 2]
]
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

### Remove Nth Node From End of List 
Given a linked list, remove the n-th node from the end of the list and return its head.
Constraints: `1 <= sz <= 30`

**Example:**
```text
Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n=2 
After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5
```

### Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order. Note that an empty string is also considered valid.
Constraints: `1 <= s.length <= 10^4`

**Example 1:**
```text
Input: "()[]{}"
Output: true 
```

### Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists. 
Constraints: `0 <= node count <= 50`

**Example:**
```text
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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

### Merge k Sorted Lists 
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
Constraints: `0 <= k <= 10^4`

**Example:**
```text
Input: 
[
	1 -> 4 -> 5,
	1 -> 3 -> 4,
	2 -> 6
]
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
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