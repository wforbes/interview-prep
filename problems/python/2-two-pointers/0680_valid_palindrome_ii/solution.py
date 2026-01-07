# 680. Valid Palindrome II
# https://leetcode.com/problems/valid-palindrome-ii/
# https://thedailybyte.dev/platform/code-editor?mailing=7
# Difficulty: Easy
# Tags: Two Pointers, String
# Desc: Given a string s, return true if the s can be palindrome after deleting at most one character from it.
class Solution(object):
    def retry(self, s: str, l: int, r: int) -> bool:
        if s[l] == s[r]:
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True
        else:
            return False
    
    def validPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while i < j:
            if s[i] != s[j]:
                if i+1 >= j-1:
                    if len(s) % 2 != 0: # if one center item remains
                        return s[i+1] == s[j] or s[i] == s[j-1] # if either left and center or right and center match, return true
                    # if two center items don't match, we could remove either so return True
                    return True # <-- I keep getting 'Sandbox keeper received fatal signal 6'
                    #   when trying to judge if input string is even or odd here
                return self.retry(s, i+1, j) or self.retry(s, i, j-1)
            i += 1
            j -= 1
        return True
        