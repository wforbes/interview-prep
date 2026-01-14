/**
 * 392. Is Subsequence - Hash Map Approach
 * Time: O(n + m), Space: O(n)
 *
 * Pre-processes string into map of character positions
 */
export function isSubsequence3(s: string, t: string): boolean {
	const map: Record<string, number[]> = {};

	// Build map of character positions
	for (let i = 0; i < t.length; i++) {
		if (Object.hasOwn(map, t[i])) {
			map[t[i]].push(i);
		} else {
			map[t[i]] = [i];
		}
	}

	let prevIdx = 0;
	let matches = 0;

	for (let j = 0; j < s.length; j++) {
		if (Object.hasOwn(map, s[j]) && map[s[j]].length > 0) {
			const indexOfIndex = map[s[j]].findIndex((num) => {
				return num >= prevIdx;
			});

			if (indexOfIndex === -1) {
				break;
			}

			const currIdx = map[s[j]][indexOfIndex];
			if (currIdx >= prevIdx) {
				map[s[j]].splice(indexOfIndex, 1);
				matches += 1;
			} else {
				break;
			}
			prevIdx = currIdx;
		} else {
			break;
		}
	}

	return matches === s.length;
}
