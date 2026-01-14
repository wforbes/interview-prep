/**
 * 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string
 * Time: O(n), Space: O(n)
 *
 * Nested While Loop Approach
 */
export function reverseVowels2(s: string): string {
	const rs = s.split("");
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let temp: string;
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		if (vowels.includes(rs[i])) {
			let swapped = false;

			while (i < j && !swapped) {
				if (vowels.includes(rs[j])) {
					temp = rs[i];
					rs[i] = rs[j];
					rs[j] = temp;
					swapped = true;
				}
				j--;
			}
		}
		i++;
	}

	return rs.join("");
}
