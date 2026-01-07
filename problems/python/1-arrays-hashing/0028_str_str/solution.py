class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return -1
        for i in range(0, len(haystack)):
            if needle[0] == haystack[i] and haystack[i:(i+len(needle))] == needle:
                return i
        return -1