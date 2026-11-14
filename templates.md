## Linked Lists

Efficient insertion and deletion in sequential data.

**Best for:** Node traversal, cycles, or reversal.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

```python
dummy = ListNode(next=head)             # use dummy if head might change
curr = dummy

while curr.next:                        # traverse
    curr = curr.next

node.next = node.next.next              # delete the node after node
new.next = node.next                    # insert new after node
node.next = new
```

## Linked List Reversal

**Best for:** Reversing a linked list (or part of it) in place.

```python
prev, curr = None, head

while curr:
    nxt = curr.next
    curr.next = prev                    # flip pointer
    prev = curr
    curr = nxt

return prev                             # new head
```

## Merge Sorted Lists

**Best for:** Merging two sorted linked lists into one.

```python
dummy = tail = ListNode()

while l1 and l2:
    if l1.val <= l2.val:
        tail.next = l1
        l1 = l1.next
    else:
        tail.next = l2
        l2 = l2.next
    tail = tail.next

tail.next = l1 or l2                    # attach the leftovers
return dummy.next
```

## Fast & Slow Pointers

**Best for:** Detecting cycles, finding the middle, or the nth node from the end.

```python
slow = fast = head

while fast and fast.next:
    slow = slow.next                    # 1 step
    fast = fast.next.next               # 2 steps
    if slow is fast:
        return True                     # cycle found

# no cycle: slow is now at the middle
```

**Nth from end:** move `fast` n steps ahead first, then move both 1 step at a time.

## Two Pointers

**Best for:** Sorted arrays, searching for pairs, palindromes, or comparing ends.

**Idea:** Two indices move through the data, so one pass replaces a nested loop ($O(N)$ instead of $O(N^2)$).

```python
left, right = 0, len(arr) - 1

while left < right:
    # use arr[left] and arr[right]
    # then move left forward, right backward, or both
```

**Note:** The pointers can also start together and move in the same direction.

## Opposite Ends

**Best for:** Pair sums in sorted arrays, palindromes, 3Sum (fix one number, two-pointer the rest).

```python
left, right = 0, len(arr) - 1

while left < right:
    total = arr[left] + arr[right]
    if total == target:
        return [left, right]
    elif total < target:
        left += 1                       # need a bigger sum
    else:
        right -= 1                      # need a smaller sum
```

## Same Direction

**Best for:** In-place array edits like removing duplicates or moving zeroes.

```python
slow = 0                                # next write position

for fast in range(len(arr)):            # fast reads every element
    if keep(arr[fast]):
        arr[slow] = arr[fast]
        slow += 1

return slow                             # length of the kept part
```

## Sliding Window

**Best for:** Longest/shortest substring or subarray with a condition.

**Idea:** Keep a window `[left, right]` over the data. Grow it from the right, and shrink it from the left when it breaks a rule.

```python
left = 0

for right in range(len(arr)):
    # add arr[right] to the window

    # if needed, remove arr[left] and move left forward

    # window is arr[left:right + 1], size = right - left + 1
```

## Variable Window

**Best for:** Longest/shortest subarray or substring that satisfies a condition.

```python
left = 0
window = {}
best = 0

for right in range(len(arr)):
    # add arr[right] to the window

    while invalid(window):
        # remove arr[left] from the window
        left += 1

    best = max(best, right - left + 1)
```

## Fixed Window

**Best for:** Subarrays or substrings of exactly size k.

```python
window = sum(arr[:k])                   # or a count dict for strings
best = window

for right in range(k, len(arr)):
    window += arr[right] - arr[right - k]   # add newest, drop oldest
    best = max(best, window)
```

## HashMap & HashSet

**Best for:** Fast lookup and membership checks.

**Note:** A `set` is just a `dict` that only stores keys (no values).

```python
hashmap = {}

hashmap[key] = value                    # insert/update 
hashmap[key]                            # lookup 
key in hashmap                          # contains  
hashmap.pop(key)                        # remove  

for key, value in hashmap.items():      # iterate  
    pass
```

```python
hashset = set()

hashset.add(value)                      # insert     
value in hashset                        # contains  
hashset.remove(value)                   # remove 

for value in hashset:                   # iterate 
    pass
```

## Complement

**Best for:** Finding a pair that adds up to a target.

```python
seen = {}                               # value -> index

for i, num in enumerate(nums):
    complement = target - num
    if complement in seen:
        return [seen[complement], i]
    seen[num] = i
```

## Seen

**Best for:** Detecting duplicates or already-visited values.

```python
seen = set()

for num in nums:
    if num in seen:
        return True                     # duplicate found
    seen.add(num)

return False
```

## Frequency

**Best for:** Counting occurrences, comparing counts, or grouping.

```python
count = {}

for x in arr:
    count[x] = count.get(x, 0) + 1      # or: count = Counter(arr)
```

## Binary Search

**Best for:** Finding a target in a **sorted** array in $O(\log N)$ time.

```python
left, right = 0, len(arr) - 1

while left <= right:
    mid = (left + right) // 2

    if go_right(mid):
        left = mid + 1                  # search the right half
    else:
        right = mid - 1                 # search the left half
```

**Which loop?**
- `while left <= right` with `mid ± 1`: looking for an exact match.
- `while left < right` with `right = mid`: narrowing down to a boundary (the first value that works).

## Classic Binary Search

**Best for:** Finding a target, or its first/last position, in a sorted array.

```python
left, right = 0, len(arr) - 1

while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

return -1
```

**First/last position:** on a match, save `mid` and keep searching left (or right).

## Rotated Sorted Array

**Best for:** Searching a sorted array that was rotated at an unknown pivot.

```python
left, right = 0, len(nums) - 1

while left <= right:
    mid = (left + right) // 2
    if nums[mid] == target:
        return mid

    if nums[left] <= nums[mid]:         # left half is sorted
        if nums[left] <= target < nums[mid]:
            right = mid - 1
        else:
            left = mid + 1
    else:                               # right half is sorted
        if nums[mid] < target <= nums[right]:
            left = mid + 1
        else:
            right = mid - 1

return -1
```

## Binary Search on Answer

**Best for:** "Smallest/largest value that works" when a guess can be checked quickly.

```python
left, right = LOW, HIGH                 # range of possible answers

while left < right:
    mid = (left + right) // 2
    if feasible(mid):
        right = mid                     # works, try smaller
    else:
        left = mid + 1                  # fails, go bigger

return left                             # smallest value that works
```

## Dynamic Programming

**Best for:** Optimization ("max/min"), counting "number of ways", overlapping subproblems.

```python
# Top-down: Recursion + Memoization
memo = {}

def dp(i):
    if BASE_CASE:
        return VALUE

    if i in memo:
        return memo[i]

    left = dp(i - 1)
    right = dp(i - 2)
    memo[i] = RESULT
    return memo[i]
```

```python
# Bottom-up: Iterative DP
def dp(n):
    arr = [0] * (n + 1)
    arr[0] = VALUE
    arr[1] = VALUE

    for i in range(2, n + 1):
        arr[i] = RESULT

    return arr[n]
```

## 1D DP

**Best for:** The answer at step i depends on the previous one or two answers.

```python
dp = [0] * (n + 1)                      # dp[i] = answer for the first i items
dp[1] = nums[0]

for i in range(2, n + 1):
    dp[i] = max(dp[i - 1], dp[i - 2] + nums[i - 1])   # skip or take (House Robber)

return dp[n]
```

## Knapsack

**Best for:** Picking items (coins, weights) to reach a target amount.

```python
dp = [float('inf')] * (amount + 1)      # dp[a] = fewest coins to make a
dp[0] = 0

for a in range(1, amount + 1):
    for coin in coins:
        if coin <= a:
            dp[a] = min(dp[a], dp[a - coin] + 1)

return dp[amount] if dp[amount] != float('inf') else -1
```

## Longest Increasing Subsequence

**Best for:** Longest subsequence that follows an order.

```python
dp = [1] * len(nums)                    # dp[i] = LIS ending at i

for i in range(len(nums)):
    for j in range(i):
        if nums[j] < nums[i]:
            dp[i] = max(dp[i], dp[j] + 1)

return max(dp)
```

## Kadane's Algorithm

**Best for:** Maximum sum of a contiguous subarray.

```python
best = curr = nums[0]

for num in nums[1:]:
    curr = max(num, curr + num)         # extend or start fresh
    best = max(best, curr)

return best
```

## Trees

**Best for:** Hierarchical data, traversing paths, or level-order processing.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

```python
def traverse(node):
    if not node:
        return
    # pre-order: process node here
    traverse(node.left)
    # in-order: process node here (sorted order in a BST)
    traverse(node.right)
    # post-order: process node here
```

## Tree DFS

**Best for:** Depth, paths, or comparing and modifying trees.

```python
def dfs(node):
    if not node:
        return 0

    left = dfs(node.left)
    right = dfs(node.right)

    return 1 + max(left, right)         # combine children (e.g. max depth)
```

## Tree BFS

**Best for:** Level-order traversal or anything "per level".

```python
if not root:
    return []

queue = deque([root])
levels = []

while queue:
    level = []
    for _ in range(len(queue)):         # process one level
        node = queue.popleft()
        level.append(node.val)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    levels.append(level)
```

## Binary Search Tree

**Best for:** Using the left < node < right ordering.

```python
def valid(node, low, high):
    if not node:
        return True
    if not (low < node.val < high):
        return False
    return valid(node.left, low, node.val) and valid(node.right, node.val, high)

valid(root, float('-inf'), float('inf'))
```

**Tip:** an in-order traversal of a BST visits values in sorted order.

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

## Subsets

**Best for:** Generating every subset (power set).

```python
res = []

def backtrack(start, path):
    res.append(path[:])                 # every path is a subset
    for i in range(start, len(nums)):
        path.append(nums[i])
        backtrack(i + 1, path)
        path.pop()

backtrack(0, [])
```

## Permutations

**Best for:** Generating every ordering of the items.

```python
res = []

def backtrack(path, used):
    if len(path) == len(nums):
        res.append(path[:])
        return
    for i in range(len(nums)):
        if used[i]:
            continue
        used[i] = True
        path.append(nums[i])
        backtrack(path, used)
        path.pop()
        used[i] = False

backtrack([], [False] * len(nums))
```

## Combinations

**Best for:** Choosing k items, or items that add up to a target.

```python
res = []

def backtrack(start, path, remaining):
    if remaining == 0:
        res.append(path[:])
        return
    for i in range(start, len(nums)):
        if nums[i] > remaining:
            continue
        path.append(nums[i])
        backtrack(i, path, remaining - nums[i])   # i: reuse allowed, i + 1: no reuse
        path.pop()

backtrack(0, [], target)
```

## Graphs

**Best for:** Connected components, islands, shortest paths, topological order.

```python
graph = defaultdict(list)               # adjacency list

for a, b in edges:
    graph[a].append(b)
    graph[b].append(a)                  # skip for directed graphs
```

```python
# DFS
visited = set()

def dfs(node):
    visited.add(node)
    for nei in graph[node]:
        if nei not in visited:
            dfs(nei)
```

```python
# BFS (shortest path in an unweighted graph)
queue = deque([start])
visited = {start}

while queue:
    node = queue.popleft()
    for nei in graph[node]:
        if nei not in visited:
            visited.add(nei)
            queue.append(nei)
```

## Graph DFS / BFS

**Best for:** Islands, connected components, flood fill, or cloning a graph.

```python
def dfs(r, c):
    if r < 0 or c < 0 or r >= rows or c >= cols:
        return
    if (r, c) in visited or grid[r][c] == "0":
        return
    visited.add((r, c))
    for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
        dfs(r + dr, c + dc)

for r in range(rows):
    for c in range(cols):
        if grid[r][c] == "1" and (r, c) not in visited:
            dfs(r, c)
            count += 1                  # found a new island
```

## Topological Sort

**Best for:** Ordering tasks with prerequisites, or detecting a cycle in a directed graph.

```python
graph = defaultdict(list)
indegree = [0] * n

for a, b in edges:                      # b must come before a
    graph[b].append(a)
    indegree[a] += 1

queue = deque(i for i in range(n) if indegree[i] == 0)
order = []

while queue:
    node = queue.popleft()
    order.append(node)
    for nxt in graph[node]:
        indegree[nxt] -= 1
        if indegree[nxt] == 0:
            queue.append(nxt)

return len(order) == n                  # False means there is a cycle
```

## Union Find

**Best for:** Connected components, or detecting a cycle in an undirected graph.

```python
parent = list(range(n))

def find(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]   # path compression
        x = parent[x]
    return x

def union(a, b):
    ra, rb = find(a), find(b)
    if ra == rb:
        return False                    # already connected: cycle
    parent[ra] = rb
    return True
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

## Top K

**Best for:** The k largest, smallest, closest, or most frequent items.

```python
heap = []

for x in arr:
    heapq.heappush(heap, x)
    if len(heap) > k:
        heapq.heappop(heap)             # drop the smallest

return heap[0]                          # kth largest
```

**Tip:** a min-heap of size k keeps the k largest items.

## Two Heaps

**Best for:** Running median, or splitting data into a lower and upper half.

```python
low, high = [], []                      # max-heap (negated), min-heap

def add(num):
    heapq.heappush(low, -num)
    heapq.heappush(high, -heapq.heappop(low))   # move largest of low to high
    if len(high) > len(low):
        heapq.heappush(low, -heapq.heappop(high))

def median():
    if len(low) > len(high):
        return -low[0]
    return (-low[0] + high[0]) / 2
```

## K-Way Merge

**Best for:** Merging k sorted lists or arrays.

```python
heap = []
for i, node in enumerate(lists):
    if node:
        heapq.heappush(heap, (node.val, i, node))

dummy = tail = ListNode()

while heap:
    val, i, node = heapq.heappop(heap)
    tail.next = node
    tail = node
    if node.next:
        heapq.heappush(heap, (node.next.val, i, node.next))

return dummy.next
```

## Math & Geometry

**Best for:** Digit manipulation, matrix operations, fast exponentiation.

```python
n % 10                                  # last digit
n // 10                                 # drop the last digit
q, r = divmod(n, k)                     # quotient and remainder
a % b == 0                              # a is divisible by b
math.gcd(a, b)                          # greatest common divisor
```

```python
INT_MAX, INT_MIN = 2**31 - 1, -2**31    # 32-bit limits (overflow checks)
int(a / b)                              # divide, truncate toward zero
-7 // 2                                 # -4: floor division rounds down
```

## Digit Manipulation

**Best for:** Reversing numbers, palindrome numbers, or summing digits.

```python
res = 0

while n > 0:
    digit = n % 10                      # last digit
    res = res * 10 + digit              # append it to the result
    n //= 10                            # drop the last digit
```

## Matrix Traversal

**Best for:** Rotating, transposing, or spiraling through a 2D grid.

```python
# Rotate 90° clockwise: transpose, then reverse each row
n = len(matrix)

for i in range(n):
    for j in range(i + 1, n):
        matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

for row in matrix:
    row.reverse()
```

## Fast Power

**Best for:** Computing $x^n$ in $O(\log n)$.

```python
def power(x, n):
    if n < 0:
        x, n = 1 / x, -n
    res = 1
    while n:
        if n & 1:
            res *= x                    # odd: use the current base once
        x *= x                          # square the base
        n >>= 1
    return res
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

## Stack and Queue

**Best for:** Valid parentheses, undo operations, parsing nested structures, or FIFO order.

```python
stack = []

stack.append(x)                         # push
stack.pop()                             # pop
stack[-1]                               # peek
not stack                               # is empty
```

```python
queue = deque()                         # from collections import deque

queue.append(x)                         # enqueue
queue.popleft()                         # dequeue
queue[0]                                # peek
not queue                               # is empty
```

**Note:** Don't use `list.pop(0)` as a queue. It's $O(N)$, while `deque.popleft()` is $O(1)$.

## Matching Brackets

**Best for:** Valid parentheses or any open/close pairing.

```python
pairs = {')': '(', ']': '[', '}': '{'}
stack = []

for ch in s:
    if ch in pairs:
        if not stack or stack.pop() != pairs[ch]:
            return False
    else:
        stack.append(ch)

return not stack
```

## Monotonic Stack

**Best for:** Next greater/smaller element, or "how many days until warmer".

```python
res = [0] * len(nums)
stack = []                              # indices, values decreasing

for i, num in enumerate(nums):
    while stack and nums[stack[-1]] < num:
        j = stack.pop()
        res[j] = i - j                  # distance to the next greater
    stack.append(i)
```

## Expression Evaluation

**Best for:** Evaluating postfix (RPN) or calculator-style expressions.

```python
stack = []

for token in tokens:
    if token in ('+', '-', '*', '/'):
        b, a = stack.pop(), stack.pop()
        if token == '+':
            stack.append(a + b)
        elif token == '-':
            stack.append(a - b)
        elif token == '*':
            stack.append(a * b)
        else:
            stack.append(int(a / b))    # truncate toward zero
    else:
        stack.append(int(token))

return stack[0]
```