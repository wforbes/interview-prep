/**
 * Climbing Stairs - Top-Down DP with Memoization
 * Time: O(n), Space: O(n)
 *
 * Recursive approach with caching
 */
export function climbStairs2(n: number): number {
	const dp = new Int32Array(n).fill(-1);

	const dfs = (i: number): number => {
		if (i >= n) return i == n ? 1 : 0;
		if (dp[i] != -1) return dp[i];
		return (dp[i] = dfs(i + 1) + dfs(i + 2));
	};

	return dfs(0);
}
