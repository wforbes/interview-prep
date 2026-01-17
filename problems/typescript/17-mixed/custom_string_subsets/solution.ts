/**
 * String Subsets (Custom Problem)
 * Source: https://www.youtube.com/watch?v=Ebyesd3mPAA
 * Time: O(s + w*n), Space: O(s)
 *
 * Given a string 's' and array of strings 'words',
 * return count of words that are a subsequence of 's'
 *
 * Examples:
 *   s = "abcde", words = ["a", "bb", "acd", "ace"]
 *   output = 3
 *
 * Best solution using character position map
 */
export function stringSubsets2(s: string, words: string[]): number {
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
		const currMap = structuredClone(map);
		let prevIdx = 0;
		let matches = 0;

		for (let j = 0; j < words[i].length; j++) {
			if (Object.hasOwn(currMap, words[i][j]) && currMap[words[i][j]].length > 0) {
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
