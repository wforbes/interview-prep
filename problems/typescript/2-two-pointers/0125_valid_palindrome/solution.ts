// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

// first, we sanitize the input string by removing all non-alphanumeric characters
// then we create two number vars, one at the beginning of the string (0) and one at the end (s.length - 1)
// we loop while the left pointer is less than the right pointer
// - if the characters at the left and right pointers do not match (converting both to lower case) we return false
// - otherwise we increment the left pointer and decrement the right pointer
// if we complete the loop without finding any mismatches, return true

export function isPalindrome(s: string): boolean {
	//const _s = s.replaceAll(/[^A-Za-z0-9]/g, "");
	let _s = "";
	for (let i = 0; i < s.length; i++) {
		if (
			(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) ||
			(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
			(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
		) {
			_s += s[i];
		}
	}
	let i = 0;
	let j = _s.length - 1;
	while (i < j) {
		if (_s[i].toLowerCase() !== _s[j].toLowerCase()) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}
