/**
 * Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array/
 *
 * Given an integer array nums of length n, create an array ans of length 2n
 * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n
 *
 * Time: O(n), Space: O(n)
 */
export function getConcatenation(nums: number[]): number[] {
	const len = nums.length;
	const result: number[] = new Array(len * 2);
	for (let i = 0; i < len; i++) {
		result[i] = nums[i];
		result[i + len] = nums[i];
	}
	return result;
}
