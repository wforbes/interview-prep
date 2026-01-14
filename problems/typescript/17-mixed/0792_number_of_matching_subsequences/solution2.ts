/**
 * 792. Number of Matching Subsequences
 * Time Complexity: O(s + w * n * log(s))
 * where s = length of s, w = number of words, n = avg word length
 * We build a map of char positions O(s)...
 * Then for each word (w), for each character (n)...
 * We do a binary search O(log(s)) to find the next occurrence
 *
 * Space Complexity: O(s)
 * where s = length of s
 * Uses binary search to find the next occurrence of each character
 */

export function numMatchingSubseq(s: string, words: string[]): number {
	let index_map = new Map<string, number[]>();
	for (let i = 0; i < s.length; i++) {
		if (!index_map.has(s[i])) {
			index_map.set(s[i], []);
		}
		index_map.get(s[i])!.push(i);
	}
	const bisectRight = (arr: number[], target: number): number => {
		let left = 0;
		let right = arr.length;
		while (left < right) {
			const mid = Math.floor((left + right) / 2);
			if (arr[mid] <= target) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		return left;
	};
	const isSubsequence = (word: string): boolean => {
		let prev_pos = -1;

		for (const char of word) {
			if (!index_map.has(char)) {
				return false;
			}
			let index = bisectRight(index_map.get(char)!, prev_pos);
			if (index === index_map.get(char)!.length) {
				return false;
			}
			prev_pos = index_map.get(char)![index];
		}
		return true;
	};

	let ans = 0;
	for (const word of words) {
		if (isSubsequence(word)) {
			ans++;
		}
	}
	return ans;
}
