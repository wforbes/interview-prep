/**
 * 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i
 * Time: O(n), Space: O(1)
 *
 * Sliding Window Approach
 */
export function findMaxAverage(nums: number[], k: number): number {
	if (nums.length < k) {
		return 0;
	}
	let maxSum = 0;
	// get sum of first window
	for (let i = 0; i < k; i++) {
		maxSum += nums[i];
	}
	let windowSum = maxSum;
	// slide the window
	for (let i = k; i < nums.length; i++) {
		// add next element, remove first element of prev window
		windowSum += nums[i] - nums[i - k];
		// update maxSum if needed
		maxSum = Math.max(maxSum, windowSum);
	}
	// return average of max sum, resulting in max average
	return maxSum / k;
}
