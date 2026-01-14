/**
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Time: O(n), Space: O(n)
 *
 * Use stack to match opening/closing brackets
 */
export function isValid(s: string): boolean {
	if (s.length % 2 !== 0) return false;

	const map: Record<string, string> = {
		')': '(',
		'}': '{',
		']': '['
	};
	const stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			if (stack.pop() !== map[s[i]]) {
				return false;
			}
		} else {
			stack.push(s[i]);
		}
	}

	return stack.length === 0;
}
