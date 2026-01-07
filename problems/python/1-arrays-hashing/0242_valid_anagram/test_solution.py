from solution import Solution

class TestValidAnagram:
    def setup_method(self):
        self.solution = Solution()

    def test_anagram(self):
        """Should return True for 'anagram' and 'nagaram'"""
        assert self.solution.isAnagram("anagram", "nagaram") == True

    def test_not_anagram(self):
        """Should return False for 'rat' and 'car'"""
        assert self.solution.isAnagram("rat", "car") == False

    def test_different_lengths(self):
        """Should return False for 'a' and 'ab'"""
        assert self.solution.isAnagram("a", "ab") == False

    def test_empty_strings(self):
        """Should return True for '' and ''"""
        assert self.solution.isAnagram("", "") == True

    def test_case_sensitivity(self):
        """Should return False for 'Listen' and 'Silent'"""
        assert self.solution.isAnagram("Listen", "Silent") == False