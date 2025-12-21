import pytest
from solution import Solution


class TestTwoSum:
    def setup_method(self):
        self.solution = Solution()

    def test_example_1(self):
        """Should return indices [0, 1] for [2,7,11,15] with target 9"""
        assert self.solution.twoSum([2, 7, 11, 15], 9) == [0, 1]

    def test_example_2(self):
        """Should return indices [1, 2] for [3,2,4] with target 6"""
        assert self.solution.twoSum([3, 2, 4], 6) == [1, 2]

    def test_example_3(self):
        """Should return indices [0, 1] for [3,3] with target 6"""
        assert self.solution.twoSum([3, 3], 6) == [0, 1]

    def test_negative_numbers(self):
        """Should handle negative numbers"""
        assert self.solution.twoSum([-1, -2, -3, -4, -5], -8) == [2, 4]

    def test_with_zero(self):
        """Should handle zero in array"""
        assert self.solution.twoSum([0, 4, 3, 0], 0) == [0, 3]

    def test_large_numbers(self):
        """Should work with large numbers"""
        assert self.solution.twoSum([1000000000, 2000000000, 3000000000], 3000000000) == [0, 1]
