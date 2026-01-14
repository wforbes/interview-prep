/**
 * Climbing Stairs - Binet's Formula
 * Time: O(log n), Space: O(1)
 *
 * Fastest solution using mathematical formula
 */
export function climbStairs0(n: number): number {
	const sqrt5 = Math.sqrt(5);
	const psi = (1 + sqrt5) / 2;
	const phi = (1 - sqrt5) / 2;
	return Math.round((Math.pow(psi, n + 1) - Math.pow(phi, n + 1)) / sqrt5);
}
