/**
 * Find the Index of the First Occurrence in a String (strStr)
 * Time: O(n*m), Space: O(m)
 *
 * Manual substring matching
 * Note: substring() creates a new string of length m
 */
export function strStr(haystack: string, needle: string): number {
	for (let i = 0; i < haystack.length; i++) {
		if (
			haystack[i] === needle[0] &&
			haystack.substring(i, i + needle.length) === needle
		) {
			return i;
		}
	}
	return -1;
}
