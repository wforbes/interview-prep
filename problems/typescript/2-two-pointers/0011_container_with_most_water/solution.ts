/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Time: O(n), Space: O(1)
 *
 * Two pointer approach - move pointer with smaller height
 */
export function maxArea2(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let maxArea = 0;

	while (left < right) {
		maxArea = Math.max(
			Math.min(height[left], height[right]) * (right - left),
			maxArea
		);

		if (height[left] <= height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
}
