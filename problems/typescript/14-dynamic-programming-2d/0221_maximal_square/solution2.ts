/**
 * Maximal Square - Top-Down DP with Memoization
 * Time: O(m*n), Space: O(m*n)
 *
 * Recursive approach with cache
 */
export function maximalSquare2(matrix: string[][]): number {
	const cache = new Map<string, number>();
	const rows = matrix.length;
	const cols = matrix[0].length;

	const helper = (r: number, c: number): number => {
		if (r >= rows || c >= cols) {
			return 0;
		}

		const key = `${r}, ${c}`;
		if (!cache.has(key)) {
			const down = helper(r + 1, c);
			const right = helper(r, c + 1);
			const diag = helper(r + 1, c + 1);
			cache.set(key, 0);

			if (matrix[r][c] === "1") {
				cache.set(key, 1 + Math.min(down, right, diag));
			}
		}

		return cache.get(key)!;
	};

	helper(0, 0);
	let maxLength = 0;

	for (const value of cache.values()) {
		if (value > maxLength) {
			maxLength = value;
		}
	}

	return maxLength ** 2;
}
