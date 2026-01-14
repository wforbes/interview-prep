/**
 * Reverse String II
 * https://leetcode.com/problems/reverse-string-ii
 * Time: O(n), Space: O(n)
 *
 * Reverse first k characters of every 2k segment
 */
export function reverseStr(s: string, k: number): string {
	const sArr = s.split("");

	for (let start = 0; start < sArr.length; start += 2 * k) {
		let left = start;
		let right = Math.min(start + k - 1, sArr.length - 1);

		while (left < right) {
			const temp = sArr[left];
			sArr[left] = sArr[right];
			sArr[right] = temp;
			left++;
			right--;
		}
	}

	return sArr.join("");
}
