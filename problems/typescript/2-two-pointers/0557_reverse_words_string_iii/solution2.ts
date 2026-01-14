/**
 * Reverse Words in a String III - Using Built-in Reverse
 * Time: O(n), Space: O(n)
 */
export function reverseWords2(s: string): string {
	const arr = s.split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split("").reverse().join("");
	}
	return arr.join(" ");
}
