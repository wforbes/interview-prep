/**
 * Valid Anagram - Sorting Approach
 * Time: O(n log n), Space: O(n)
 * Simplest but not most efficient
 */
export function isAnagram2(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	return s.split("").sort().join("") === t.split("").sort().join("");
}
