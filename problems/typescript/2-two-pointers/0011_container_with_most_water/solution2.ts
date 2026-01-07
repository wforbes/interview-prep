/**
 * Container With Most Water - Alternative approach
 * Time: O(n^2), Space: O(1)
 */
export function maxArea(height: number[]): number {
	let i = 0;
	let j = height.length - 1;
	let area = 0;

	while (i < j) {
		const x = j - i;
		const y = Math.min(height[i], height[j]);

		if (x * y > area) {
			area = x * y;
		}

		// Reset j and increment i if reached middle
		if (j <= height.length / 2 + 1) {
			j = height.length + 1;
			i++;
		}
		j--;
	}

	return area;
}
