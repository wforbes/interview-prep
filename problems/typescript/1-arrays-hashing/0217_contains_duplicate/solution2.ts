/**
 * Contains Duplicate - Sorting Approach
 * Time: O(n log n), Space: O(n)
 */
export function hasDuplicate1(nums: number[]): boolean {
	nums.sort((a, b) => a - b);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			return true;
		}
	}
	return false;
}
