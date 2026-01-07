import pytest
from solution import Solution


class TestRemoveDuplicates:
    def setup_method(self):
        self.solution = Solution()

    def test_twoUnique_lenThree(self):
        """Should return 2 for [1,1,2]"""
        nums = [1,1,2]
        k = self.solution.removeDuplicates(nums)
        assert k == 2
        assert nums[:k] == [1,2]

    def test_fiveUnique_lenTen(self):
        """Should return 5 for [0,0,1,1,1,2,2,3,3,4]"""
        nums = [0,0,1,1,1,2,2,3,3,4]
        k = self.solution.removeDuplicates(nums)
        assert k == 5
        assert nums[:k] == [0,1,2,3,4]