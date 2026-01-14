/**
 * Reverse Words in a String III - Functional Approach
 * Time: O(n), Space: O(n)
 *
 * Most concise using map
 */
export function reverseWords3(s: string): string {
	return s
		.split(' ')
		.map((x) => x.split('').reverse().join(''))
		.join(' ');
}
