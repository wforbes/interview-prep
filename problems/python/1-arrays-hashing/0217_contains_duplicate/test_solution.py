from solution import Solution

class TestContainsDuplicate:
    def setup_method(self):
        self.solution = Solution()

    def test_one_duplicate(self):
        """Should return True for [1,2,3,1]"""
        assert self.solution.containsDuplicate([1,2,3,1]) == True
    
    def test_no_duplicates(self):
        """Should return False for [1,2,3,4]"""
        assert self.solution.containsDuplicate([1,2,3,4]) == False

    def test_multiple_duplicates(self):
        """Should return True for [1,1,1,3,3,4,3,2,4,2]"""
        assert self.solution.containsDuplicate([1,1,1,3,3,4,3,2,4,2]) == True

    def test_empty_array(self):
        """Should return False for []"""
        assert self.solution.containsDuplicate([]) == False
