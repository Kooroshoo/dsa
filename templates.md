## Two Pointers

**Best for:** Sorted arrays, searching for pairs, palindromes, or comparing ends.

```python
# Variant 1: opposite ends - move toward each other
left, right = 0, len(arr) - 1

while left < right:
    if condition(arr[left], arr[right]):
        left += 1   # move left pointer inward
    else:
        right -= 1  # move right pointer inward
```

```python
# Variant 2: fast & slow - same start, different speed (cycle detection, middle of list)
slow, fast = head, head

while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        break  # cycle found
```

## Sliding Window

**Best for:** "Longest/shortest substring" or "subarray" with a specific condition.

```python
left = 0

for right in range(len(arr)):
    # expand the window by including arr[right]

    while window_is_invalid():
        # shrink the window from the left
        left += 1

    # update the best answer using the window [left, right]
```

## HashMap & HashSet

**Best for:** Tracking frequencies, finding duplicates, or fast lookups.

**Note:** A `set` is just a `dict` that only stores keys (no values) - both use hashing, so both give $O(1)$ average time.

```python
hashmap = {}

hashmap[key] = value                    # insert/update  -> O(1)
hashmap[key]                            # lookup         -> O(1)
hashmap.get(key)                        # safe lookup    -> O(1)
key in hashmap                          # contains       -> O(1)
del hashmap[key]                        # remove         -> O(1)
for key in hashmap.keys():              # iterate        -> O(N)
    pass
for value in hashmap.values():          # iterate        -> O(N)
    pass
for key, value in hashmap.items():      # iterate        -> O(N)
    pass
```

```python
hashset = set()

hashset.add(value)                      # insert      -> O(1)
value in hashset                        # contains    -> O(1)
hashset.remove(value)                   # remove      -> O(1)
hashset.discard(value)                  # safe remove -> O(1)
for value in hashset:                   # iterate     -> O(N)
    pass
```

## Binary Search

**Best for:** Finding a target in a **sorted** array in $O(\log N)$ time.

```python
left, right = 0, len(arr) - 1

while left <= right:
    mid = (left + right) // 2

    if condition(arr[mid]):
        left = mid + 1   # search the right half
    else:
        right = mid - 1  # search the left half
```

## Dynamic Programming

**Best for:** Optimization ("max/min"), counting "number of ways", overlapping subproblems.

```python
dp = {}

def solve(state):
    if state in dp:
        return dp[state]
    if is_base_case(state):
        return base_value

    dp[state] = combine(solve(next_state_1), solve(next_state_2))
    return dp[state]
```

## Linked Lists

**Best for:** Traversing, modifying, or reversing nodes (fast/slow variant lives under Two Pointers).

```python
# Traversal - use a dummy node if the head itself might change
dummy = ListNode(next=head)
curr = dummy

while curr.next:
    # inspect or modify curr.next here
    curr = curr.next
```

```python
# Reversal - flip each node's `next` pointer as you walk the list
prev, curr = None, head

while curr:
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node

head = prev
```

## Trees + DFS/BFS

**Best for:** Hierarchical data. Use DFS for deep paths, BFS for level-by-level.

```python
# Standard Recursive DFS
def dfs(node):
    if node is None:
        return
        
    # Pre-order processing here
    dfs(node.left)
    # In-order processing here
    dfs(node.right)
    # Post-order processing here
```

```python
# Standard BFS for Level-Order / Shortest Path
from collections import deque

def bfs(root):
    if not root: return

    queue = deque([root])

    while queue:
        level_size = len(queue)
        for _ in range(level_size):
            node = queue.popleft()

            # process node here

            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
```

## Backtracking

**Best for:** Generating all combinations, permutations, or subsets.

```python
def backtrack(path, choices):
    if is_solution(path):
        results.append(path[:])  # Save a copy
        return

    for choice in choices:
        path.append(choice)            # 1. Choose
        backtrack(path, next_choices)  # 2. Explore
        path.pop()                     # 3. Un-choose (backtrack)
```

## Graphs

**Best for:** Connected components, islands, shortest paths, topological order.

```python
# Standard DFS over an adjacency list / grid
def dfs(node, visited, graph):
    if node in visited:
        return
    visited.add(node)

    for neighbor in graph[node]:
        dfs(neighbor, visited, graph)
```

## Structure Traversal (See Step 2)

**Note:** No complex algorithmic trick was detected. You likely just need to loop over the data structure identified in Step 2.

```python
# 1. Standard Array Traversal
def traverseArray(nums):
    for i in range(len(nums)):
        # process nums[i]
        pass

# 2. Standard Linked List Traversal
def traverseLinkedList(head):
    curr = head
    while curr is not None:
        # process curr.val
        curr = curr.next
```

## Heap & Priority Queue

**Best for:** "Top K" elements, running median, sorting dynamically.

```python
import heapq

heap = []
heapq.heappush(heap, value)   # add an item, O(log N)
smallest = heapq.heappop(heap)  # remove + return smallest, O(log N)

# No max-heap in Python - push negated values to simulate one
```

## Math & Geometry

**Best for:** Digit manipulation, string-to-number conversions, and mathematical mappings.

```python
# 1. Digit Extraction (Reverse Integer, Palindrome Number)
def processDigits(n):
    res = 0
    n = abs(n)
    while n > 0:
        digit = n % 10            # Pop last digit
        res = (res * 10) + digit  # Push to new number
        n = n // 10               # Remove last digit
    return res


# 2. String to Number (atoi)
def stringToNumber(s):
    res = 0
    for char in s:
        if char.isdigit():
            digit = int(char)
            res = (res * 10) + digit # Shift left and add
    return res


# 3. Value Mapping (Integer to Roman)
def intToRoman(num):
    # Always order from largest to smallest
    values = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), 
              (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), 
              (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]
    
    res = []
    for val, symbol in values:
        if num == 0: break
        count = num // val
        res.append(symbol * count)
        num = num % val
        
    return "".join(res)
```

## Trie (Prefix Tree)

**Best for:** String matching, prefix checking, and word dictionaries.

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end
```

## Ad-Hoc / Brute Force

**Best for:** Small constraints ($N \le 100$) where no obvious optimal pattern exists. Try all possibilities.

```python
def bruteForce(nums):
    n = len(nums)
    best_ans = 0
    
    # Check every possible pair or combination
    for i in range(n):
        for j in range(i + 1, n):
            # Evaluate nums[i] and nums[j]
            pass
            
    return best_ans
```

## Stack

**Best for:** Valid parentheses, undo operations, parsing nested structures.

```python
def stackTemplate(s):
    stack = []
    
    for char in s:
        if char in "({[":       # Open condition
            stack.append(char)
        else:                   # Close condition
            if not stack: 
                return False
            top = stack.pop()
            # Check if 'top' matches 'char' here
            
    return len(stack) == 0      # Valid if empty at the end
```