/**
 * 792. Number of Matching Subsequences
 * Time: O(s * w * n), Space: O(s)
 * where s = length of s, w = number of words, n = avg word length
 * For each word (w), for each character (n), indexOf does O(s) operations
 *
 * This solution is highly performant despite its time complexity due to:
 *  - indexOf and substring run at C++ speed internally
 *  - less branching than other solutions, leading to better CPU pipelining
 *  - modern JS engines are heavily optimized for string operations
 */

export function numMatchingSubseq(s: string, words: string[]): number {
	const isSubsequence = (string: string, substring: string): boolean => {
		if (substring.length > string.length) return false;
		if (substring.length === string.length) return string === substring;

		for (const char of substring) {
			let index = string.indexOf(char);
			if (index === -1) {
				return false;
			}
			string = string.substring(index + 1);
		}

		return true;
	};

	return words.map((word) => isSubsequence(s, word)).filter((a) => a).length;
}
