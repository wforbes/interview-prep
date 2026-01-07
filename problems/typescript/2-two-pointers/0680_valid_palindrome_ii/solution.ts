/*
    680. Valid Palindrome II
    https://leetcode.com/problems/valid-palindrome-ii/
    https://thedailybyte.dev/platform/code-editor?mailing=7
    Difficulty: Easy
    Tags: Two Pointers, String
    Desc: Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/
export function validPalindrome(s: string): boolean {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			if (left + 1 >= right - 1) {
				if (s.length % 2 !== 0) {
					return s[left + 1] == s[right] || s[left] == s[right - 1];
				}
				return true;
			}
			return (
				isPalindrome(s, left + 1, right) ||
				isPalindrome(s, left, right - 1)
			);
		}
		left++;
		right--;
	}
	return true;
}

function isPalindrome(s: string, l: number, r: number) {
	if (s[l] == s[r]) {
		while (l < r) {
			if (s[l] !== s[r]) {
				return false;
			}
			l++;
			r--;
		}
		return true;
	}
	return false;
}
