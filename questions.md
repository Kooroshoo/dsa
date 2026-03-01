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
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR". Write a code that will take a string and make this conversion given a number of rows.
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