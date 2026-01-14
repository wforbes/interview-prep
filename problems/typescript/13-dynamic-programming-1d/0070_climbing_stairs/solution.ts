/**
 * Climbing Stairs - Bottom-Up DP (Space Optimized)
 * https://leetcode.com/problems/climbing-stairs
 * Time: O(n), Space: O(1)
 *
 * Best solution - Fibonacci pattern with constant space
 */
export function climbStairs(n: number): number {
	let one = 1;
	let two = 1;

	for (let i = 0; i < n - 1; i++) {
		const temp = one;
		one = one + two;
		two = temp;
	}

	return one;
}
