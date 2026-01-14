/**
 * 345. Reverse Vowels of a String - Set-based Approach
 * Time: O(n), Space: O(n)
 *
 * Note: Using Set is slower than array in this case
 */
export function reverseVowels3(s: string): string {
	const vowels = new Set(["a", "e", "i", "o", "u"]);
	const sArr = s.split("");
	let temp: string;
	let left = 0;
	let right = sArr.length - 1;

	while (left < right) {
		if (!vowels.has(sArr[left].toLowerCase())) {
			left++;
		} else if (!vowels.has(sArr[right].toLowerCase())) {
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
