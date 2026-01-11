/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * first solve: 1/10/26
 */

export function trapWater(height: number[]): number {
	// for each height in the array, find the local left maximum
	let max = 0;
	let leftMaxs = [];
	for (let i = 0; i < height.length; i++) {
		leftMaxs.push(max);
		max = Math.max(max, height[i]);
	}
	// for each height in the array, find the local right maximum
	max = 0;
	let rightMaxs = [];
	for (let i = height.length - 1; i >= 0; i--) {
		rightMaxs.unshift(max);
		max = Math.max(max, height[i]);
	}

	// for each height in the array, find the lowest of the left and right maximum
	//  and subtract this current local height (or zero if less than zero)
	//  to compute this current indexes trapped water
	let totalWater = 0;
	for (let i = 0; i < height.length; i++) {
		let curr = Math.min(leftMaxs[i], rightMaxs[i]) - height[i];
		totalWater += curr >= 0 ? curr : 0;
	}

	return totalWater;
}
