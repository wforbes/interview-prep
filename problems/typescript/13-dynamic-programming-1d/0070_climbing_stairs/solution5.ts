/**
 * Climbing Stairs - Pure Recursion (No Memoization)
 * Time: O(2^n), Space: O(n)
 *
 * Note: Very slow, demonstrates why DP is needed
 */
export function climbStairs3(n: number): number {
	const dfs = (i: number): number => {
		if (i >= n) return i == n ? 1 : 0;
		return dfs(i + 1) + dfs(i + 2);
	};

	return dfs(0);
}
