/**
 * 392. Is Subsequence - Two Pointer Approach
 * Time: O(n), Space: O(1)
 *
 * Most efficient solution using two pointers
 * first solved 9/23/25
 */
export function isSubsequence(s: string, t: string): boolean {
	if (s.length === 0) return true;
	if (t.length === 0) return false;
	if (s.length > t.length) return false;

	let sptr = 0;
	let tptr = 0;

	while (tptr < t.length && sptr < s.length) {
		if (s[sptr] !== t[tptr]) {
			tptr++;
			continue;
		}
		sptr++;
		tptr++;
	}

	return sptr >= s.length;
}
