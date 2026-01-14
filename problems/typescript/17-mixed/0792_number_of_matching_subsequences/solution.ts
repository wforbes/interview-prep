/**
 * 792. Number of Matching Subsequences
 * Time: O(s + w*n*s), Space: O(w*s)
 * where s = length of s, w = number of words, n = avg word length
 * For each word (w), for each character (n), we do O(s) operations
 *
 * This fails Leetcode on large test cases due to time limit exceeded
 */
export function numMatchingSubseq(s: string, words: string[]): number {
	const map: Record<string, number[]> = {};

	// Build map of character positions in s
	for (let i = 0; i < s.length; i++) {
		if (Object.hasOwn(map, s[i])) {
			map[s[i]].push(i);
		} else {
			map[s[i]] = [i];
		}
	}

	let result = 0;

	// Check each word
	for (let i = 0; i < words.length; i++) {
		// this contributes to more of a O(w*s) space complexity due to
		// 	cloning the map for each word ... and O(s) time complexity
		const currMap = structuredClone(map);
		let prevIdx = 0;
		let matches = 0;

		for (let j = 0; j < words[i].length; j++) {
			if (
				Object.hasOwn(currMap, words[i][j]) &&
				currMap[words[i][j]].length > 0
			) {
				const indexOfIndex = currMap[words[i][j]].findIndex((num) => {
					return num >= prevIdx;
				});

				if (indexOfIndex === -1) {
					break;
				}

				const currIdx = currMap[words[i][j]][indexOfIndex];
				if (currIdx >= prevIdx) {
					currMap[words[i][j]].splice(indexOfIndex, 1);
					matches += 1;
				} else {
					break;
				}
				prevIdx = currIdx;
			} else {
				break;
			}
		}

		if (matches === words[i].length) {
			result += 1;
		}
	}

	return result;
}
