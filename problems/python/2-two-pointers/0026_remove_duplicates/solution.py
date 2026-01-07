from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Remove Duplicates from Sorted Array
        Time: O(n), Space: O(1)
        Two pointer approach - one for reading, one for writing unique elements
        """
        if not nums:
            return 0

        k = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[k - 1]:
                nums[k] = nums[i]
                k += 1
        return k
