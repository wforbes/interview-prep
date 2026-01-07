'''
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/
1/6/26 - Review
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Notes: (start @ 12:05am)
We know that the two strings can't be anagrams if they aren't the same length
So we should return early if their lengths don't match

Anagrams share an equal number of unique letter occurences
So we can track each strings occurrences in two maps (dictionaries)...
    a trade off here is using extra space for being able to take one flat loop
    over both strings at the same time
So as we iterate over one of the strings we'll do the following for both
    if the letter at `i` is not in that string's map yet, set it with a value of one
    if it's already in the map, increment its value by 1
Then we can iterate over the keys in one of the maps
    if the given key isnt in the other map - we can return false
    if the given key doesnt have the same occurrence count in the other map - we can return false
Otherwise, we can return true - they're anagrams!
(timestamp @ 12:10am) - starting to code
'''
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        tMap = {}
        sMap = {}

        for i in range(0, len(s)): # is there a better way to get the letter directly?
            if s[i] in sMap:
                sMap[s[i]] += 1
            else:
                sMap[s[i]] = 1
            
            if t[i] in tMap:
                tMap[t[i]] += 1
            else:
                tMap[t[i]] = 1

        for k, v in sMap.items(): # <-- forgot about .items() ... had to depend on intellisense
            print(f"checking {k} and {v}")
            if k not in tMap or tMap[k] != v:
                return False

        return True
# finished coding with first test pass @ 12:19am