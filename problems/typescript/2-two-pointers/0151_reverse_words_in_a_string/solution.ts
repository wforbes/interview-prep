/**
 * Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string
 * Time: O(n), Space: O(n)
 *
 * Trim, normalize spaces, split, then two-pointer swap
 */
export function reverseWords(s: string): string {
	// Trim and replace multiple spaces with single space
	const sArr = s.trim().replace(/(\s+)/gi, " ").split(" ");

	// Two pointer swap
	let left = 0;
	let right = sArr.length - 1;

	while (left < right) {
		const temp = sArr[left];
		sArr[left] = sArr[right];
		sArr[right] = temp;
		left++;
		right--;
	}

	return sArr.join(" ");
}
