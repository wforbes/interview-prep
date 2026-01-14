/**
 * Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii
 * Time: O(n), Space: O(n)
 *
 * Reverse each word individually using two pointers
 */
export function reverseWords(s: string): string {
	const words = s.split(/[\s+]/g);

	for (let i = 0; i < words.length; i++) {
		const word = words[i].split("");
		let left = 0;
		let right = word.length - 1;

		while (left < right) {
			const temp = word[left];
			word[left] = word[right];
			word[right] = temp;
			left++;
			right--;
		}

		words[i] = word.join("");
	}

	return words.join(" ");
}
