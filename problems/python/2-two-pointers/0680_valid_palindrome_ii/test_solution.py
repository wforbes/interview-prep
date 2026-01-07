import pytest
from solution import Solution


class TestValidPalindromeII:
    def setup_method(self):
        self.solution = Solution()

    def test_example_0(self):
        """Should return False for 'abc'"""
        assert self.solution.validPalindrome("abc") is False

    def test_example_1(self):
        """Should return True for 'abcba'"""
        assert self.solution.validPalindrome("abcba") is True

    def test_example_2(self):
        """Should return False for 'abccab'"""
        assert self.solution.validPalindrome("abccab") is False

    def test_example_3(self):
        """Should return True for 'foobof'"""
        assert self.solution.validPalindrome("foobof") is True
    
    def test_example_4(self):
        """Should return True for 'cbbcc'"""
        assert self.solution.validPalindrome("cbbcc") is True