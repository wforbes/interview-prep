/**
 * 345. Reverse Vowels of a String - Optimized Approach
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * Time: O(n), Space: O(n)
 *
 * Two pointer with if/else logic, using toLowerCase
 * first solved 9/27/25
 */
export function reverseVowels(s: string): string {
	const vowels = ["a", "e", "i", "o", "u"];
	const sArr = s.split("");
	let temp: string;
	let left = 0;
	let right = sArr.length - 1;

	while (left < right) {
		if (!vowels.includes(sArr[left].toLowerCase())) {
			left++;
		} else if (!vowels.includes(sArr[right].toLowerCase())) {
			right--;
		} else {
			temp = sArr[left];
			sArr[left] = sArr[right];
			sArr[right] = temp;
			left++;
			right--;
		}
	}

	return sArr.join("");
}
