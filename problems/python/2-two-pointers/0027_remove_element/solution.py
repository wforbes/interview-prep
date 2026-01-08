class Solution:
    def remove_element(self, nums: list[int], val: int) -> int:
        """
        Remove Element - Optimized Two Pointer Approach
        Time: O(n), Space: O(1)

        Copy non-target elements to front of array, then optionally remove excess
        """
        # orgEnd = len(nums) - 1  # Original length before removals
        k = 0

        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1

        # Optionally remove excess elements from end
        # for j in range(orgEnd - k + 1):
        #     nums.pop()

        return k