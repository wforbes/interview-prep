from solution import Solution

class TestStrStr:
    def setup_method(self):
        self.solution = Solution()

    def test_needle_at_start(self):
        """Should return 0 for haystack 'hello' and needle 'he'"""
        assert self.solution.strStr("hello", "he") == 0

    def test_needle_in_middle(self):
        """Should return 2 for haystack 'hello' and needle 'll'"""
        assert self.solution.strStr("hello", "ll") == 2

    def test_needle_not_found(self):
        """Should return -1 for haystack 'hello' and needle 'world'"""
        assert self.solution.strStr("hello", "world") == -1

    def test_empty_needle(self):
        """Should return -1 for any haystack with empty needle"""
        assert self.solution.strStr("hello", "") == -1
        assert self.solution.strStr("", "") == -1

    def test_needle_longer_than_haystack(self):
        """Should return -1 when needle is longer than haystack"""
        assert self.solution.strStr("hi", "hello") == -1