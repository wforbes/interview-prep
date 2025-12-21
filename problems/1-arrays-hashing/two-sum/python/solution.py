from types import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        history = set()
        for i in range(0, len(nums)):
            if nums[i] in history:
                return True
            history.add(nums[i])
        return False