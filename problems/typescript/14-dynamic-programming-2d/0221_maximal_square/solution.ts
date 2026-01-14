/**
 * Maximal Square - Space Optimized DP
 * Time: O(m*n), Space: O(n)
 *
 * Best solution with 1D DP array
 */
export function maximalSquare(matrix: string[][]): number {
	const rows = matrix.length;
	const cols = rows > 0 ? matrix[0].length : 0;
	let maxLength = 0;
	const dp = new Array(cols + 1).fill(0);
	let prev = 0;

	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			const temp = dp[j];
			if (matrix[i - 1][j - 1] == '1') {
				dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1;
				maxLength = Math.max(maxLength, dp[j]);
			} else {
				dp[j] = 0;
			}
			prev = temp;
		}
	}

	return maxLength ** 2;
}
