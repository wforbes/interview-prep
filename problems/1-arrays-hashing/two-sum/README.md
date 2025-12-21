# Two Sum

**Difficulty:** Easy
**Topic:** Arrays & Hashing
**Link:** [LeetCode #1](https://leetcode.com/problems/two-sum/)

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Approach

### Brute Force (Not Optimal)
- Nested loops to check every pair
- Time: O(n²), Space: O(1)

### Hash Map (Optimal)
- Use a hash map to store values we've seen and their indices
- For each number, check if `target - num` exists in the map
- If yes, return the indices; if no, add current number to map
- Time: O(n), Space: O(n)

## Complexity
- **Time:** O(n) - single pass through array
- **Space:** O(n) - hash map storage

## Notes
- Classic interview problem testing hash map knowledge
- Key insight: trading space for time complexity
- Watch for edge cases with duplicate values
