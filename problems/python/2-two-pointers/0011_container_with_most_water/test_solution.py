import pytest
from solution import Solution

class TestContainerWithMostWater:
    def setup_method(self):
        self.solution = Solution()

    def test_example1(self):
        """Should return 49 for [1,8,6,2,5,4,8,3,7]"""
        height = [1,8,6,2,5,4,8,3,7]
        result = self.solution.maxArea(height)
        assert result == 49

    def test_example2(self):
        """Should return 1 for [1,1]"""
        height = [1,1]
        result = self.solution.maxArea(height)
        assert result == 1

    def test_increasing_heights(self):
        """Should return 6 for [1,2,3,4,5]"""
        height = [1,2,3,4,5]
        result = self.solution.maxArea(height)
        assert result == 6

    def test_decreasing_heights(self):
        """Should return 6 for [5,4,3,2,1]"""
        height = [5,4,3,2,1]
        result = self.solution.maxArea(height)
        assert result == 6

    def test_equal_heights(self):
        """Should return 25 for [5,5,5,5,5]"""
        height = [5,5,5,5,5]
        result = self.solution.maxArea(height)
        assert result == 20