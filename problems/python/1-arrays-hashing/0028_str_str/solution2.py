## 28. Find the Index of the First Occurrence in a String
# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
# Note: Found that this solution runs much faster than solution.py
#   possibly due to fewer length calculations and slicing only when necessary.
class Solution2:
    def strStr(self, haystack: str, needle: str) -> int:
        n = len(needle)
        if needle == "" or n > len(haystack):
            return -1
        i = 0
        while i <= len(haystack) - n:
            if haystack[i:i+n] == needle:
                return i
            i += 1
        return -1