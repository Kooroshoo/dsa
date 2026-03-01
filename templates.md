## Two Pointers

**Best for:** Sorted arrays, searching for pairs, palindromes, or comparing ends.

```python
# Standard opposite-ends Two Pointers
def twoPointers(nums, target):
    left = 0
    right = len(nums) - 1
    
    while left < right:
        curr_sum = nums[left] + nums[right]
        
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1  # Need a bigger number
        else:
            right -= 1 # Need a smaller number
            
    return -1
```

## Sliding Window

**Best for:** "Longest/shortest substring" or "subarray" with a specific condition.

```python
def slidingWindow(nums, k):
    left = 0
    current_state = 0
    best_result = 0
    
    for right in range(len(nums)):
        # 1. Add nums[right] to current_state
        current_state += nums[right]
        
        # 2. If window is invalid, shrink from the left
        while current_state > k: # (Replace with specific condition)
            current_state -= nums[left]
            left += 1
            
        # 3. Update the best result
        best_result = max(best_result, right - left + 1)
        
    return best_result
```

## HashMap / HashSet

**Best for:** Tracking frequencies, finding duplicates, or fast $O(1)$ lookups (like Two Sum complements).

```python
def hashMapTemplate(nums, target):
    seen = {} # val : index
    
    for i, num in enumerate(nums):
        complement = target - num
        
        # O(1) fast lookup
        if complement in seen:
            return [seen[complement], i]
            
        # Store for future lookups
        seen[num] = i
        
    return []
```

## Binary Search

**Best for:** Finding a target in a **sorted** array in $O(\log N)$ time.

```python
def binarySearch(nums, target):
    left = 0
    right = len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1  # Target is in the right half
        else:
            right = mid - 1 # Target is in the left half
            
    return -1
```

## Dynamic Programming

**Best for:** Optimization ("max/min"), counting "number of ways", overlapping subproblems.

```python
# Bottom-Up Tabulation Template (1D)
def dpTemplate(n, costs):
    if n == 0: return 0
    
    # 1. Initialize DP array
    dp = [0] * (n + 1)
    
    # 2. Set Base Cases
    dp[0] = costs[0]
    dp[1] = costs[1]
    
    # 3. Build up from smallest subproblems
    for i in range(2, n + 1):
        dp[i] = min(dp[i-1], dp[i-2]) + costs[i]
        
    return dp[n]
```

## Linked List

**Best for:** Iterating through nodes, fast/slow cycle detection.

```python
def linkedListTraversal(head):
    # Always use a dummy node if the head might change!
    dummy = ListNode(0)
    dummy.next = head
    curr = dummy.next
    
    while curr is not None:
        # Do something with curr.val
        curr = curr.next
        
    return dummy.next
```

## Tree / Binary Tree / BST

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

## Structure Traversal (See Step 2)

**Note:** No complex algorithmic trick was detected. You likely just need to loop over the data structure identified in Step 2 (e.g., standard `for` loop over an array, or a `while` loop over a linked list).

```python
# Standard Linear Scan
for i in range(len(nums)):
    # process nums[i]
    pass
```

## DFS / BFS

**Best for:** Trees, Graphs, Matrices, and finding all combinations.

```python
# Standard BFS for Level-Order / Shortest Path
from collections import deque

def bfs(root):
    if not root: return
    
    queue = deque([root])
    steps = 0
    
    while queue:
        level_size = len(queue)
        for _ in range(level_size):
            node = queue.popleft()
            
            # Process node here
            
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
            
        steps += 1
        
    return steps
```

## Heap & Priority Queue

**Best for:** "Top K" elements, running median, sorting dynamically.

```python
import heapq

def topKElements(nums, k):
    min_heap = []
    
    for num in nums:
        heapq.heappush(min_heap, num)
        
        # Keep only the Top K largest elements in the heap
        if len(min_heap) > k:
            heapq.heappop(min_heap)
            
    # The root of the min_heap is the Kth largest element
    return min_heap[0] 
```