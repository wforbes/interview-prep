/**
 * String Subsets - Filter Approach
 * Time: O(w * s), Space: O(s)
 *
 * Less efficient approach using filter
 */
export function stringSubsets(s: string, words: string[]): number {
	if (s.length === 0) return 0;

	let result = 0;

	for (let i = 0; i < words.length; i++) {
		const filtered = s.split("").filter((c) => words[i].includes(c)).join("");
		if (filtered.includes(words[i])) {
			result++;
		}
	}

	return result;
}
