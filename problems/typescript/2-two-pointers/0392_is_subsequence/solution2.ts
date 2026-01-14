/**
 * 392. Is Subsequence - indexOf Approach
 * Time: O(n), Space: O(1)
 *
 * Uses indexOf to find characters
 */
export function isSubsequence2(s: string, t: string): boolean {
	let tptr = 0;

	for (let i = 0; i < s.length; i++) {
		const foundIdx = t.indexOf(s[i], tptr);
		if (foundIdx === -1) {
			return false;
		}
		tptr = foundIdx + 1;
	}

	return true;
}
