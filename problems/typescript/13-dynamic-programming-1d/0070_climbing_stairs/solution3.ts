/**
 * Climbing Stairs - Bottom-Up DP with Memoization
 * Time: O(n), Space: O(n)
 *
 * Classic tabulation approach
 */
export function climbStairs1(n: number): number {
	const dp = new Array(n + 1).fill(-1);
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
}
