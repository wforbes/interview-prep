/**
 * Valid Anagram - Character Count Array Approach
 * Time: O(n), Space: O(1) - fixed size array of 26
 */
export function validAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const counts = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
		counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
	}

	return counts.every((count) => count === 0);
}
