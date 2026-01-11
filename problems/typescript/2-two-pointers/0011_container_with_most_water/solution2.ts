/**
 * Container With Most Water - Exhaustive Search Approach
 * Time: O(n²), Space: O(1)
 *
 * Checks all pairs by sweeping j for each i position
 * Less efficient but demonstrates brute force approach
 */
export function maxArea2(height: number[]): number {
	let i = 0;
	let j = height.length - 1;
	let area = 0;

	while (i < height.length - 1) {
		const x = j - i;
		const y = Math.min(height[i], height[j]);

		if (x * y > area) {
			area = x * y;
		}

		j--;

		// When j reaches i, move to next i and reset j to end
		if (j <= i) {
			i++;
			j = height.length - 1;
		}
	}

	return area;
}
