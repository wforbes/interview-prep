from solution import Solution

class TestRemoveElement:
    def setup_method(self):
        self.solution = Solution()
    def test_remove_element(self):
        """Should remove all instances of val and return new length"""
        nums = [3,2,2,3]
        val = 3
        k = self.solution.remove_element(nums, val)
        assert k == 2
        assert nums[:k] == [2,2]
    def test_no_removals(self):
        """Should return original length when val not present"""
        nums = [0,1,2,3,4]
        val = 5
        k = self.solution.remove_element(nums, val)
        assert k == 5
        assert nums[:k] == [0,1,2,3,4]
    def test_all_removals(self):
        """Should return 0 when all elements are val"""
        nums = [1,1,1,1]
        val = 1
        k = self.solution.remove_element(nums, val)
        assert k == 0
        assert nums[:k] == []
    def test_empty_array(self):
        """Should return 0 for empty array"""
        nums = []
        val = 0
        k = self.solution.remove_element(nums, val)
        assert k == 0
        assert nums[:k] == []
    def test_mixed_elements(self):
        """Should correctly remove val from mixed array"""
        nums = [4,5,6,7,4,8,4,9]
        val = 4
        k = self.solution.remove_element(nums, val)
        assert k == 5
        assert nums[:k] == [5,6,7,8,9]