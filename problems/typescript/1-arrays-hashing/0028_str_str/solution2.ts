/**
 * Find the Index of the First Occurrence - Built-in Method
 * Time: O(n*m), Space: O(1)
 *
 * Using built-in indexOf (not recommended for interviews)
 */
export function strStr2(haystack: string, needle: string): number {
	if (needle.length === 0) return -1;
	return haystack.indexOf(needle);
}
