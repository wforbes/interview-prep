from typing import List

class Solution:
    """
    Time: O(n), Space: O(1)

    Two pointer approach - move pointer with smaller height
    - Reviewed 01/10/2026
    """
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_area = 0

        while left < right:
            current_area = (right - left) * min(height[left], height[right])
            max_area = max(max_area, current_area)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area