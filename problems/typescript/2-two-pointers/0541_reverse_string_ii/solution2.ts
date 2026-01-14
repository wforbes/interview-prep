/**
 * 541. Reverse String II
 * https://leetcode.com/problems/reverse-string-ii
 * Time: O(n), Space: O(n)
 *
 * Slice and Reverse Approach
 */
export function reverseStr2(str: string, k: number): string {
	let res: string = "";
	for (let i = 0; i < str.length; i += 2 * k) {
		let part = str
			.slice(i, i + k)
			.split("")
			.reverse()
			.join("");
		res += part + str.slice(i + k, i + 2 * k);
	}

	return res;
}
