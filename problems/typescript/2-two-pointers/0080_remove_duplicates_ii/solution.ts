/**
 * Remove Duplicates from Sorted Array II - Two Pointer Approach
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * Time: O(n), Space: O(1)
 *
 * Allow at most two duplicates by copying valid elements forward
 * to the k pointer position.
 */
export function removeDuplicates(nums: number[]): number {
	if (nums.length <= 2) {
		return nums.length;
	}
	let k = 2;
	for (let i = 2; i < nums.length; i++) {
		if (nums[k - 2] !== nums[i]) {
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
}
