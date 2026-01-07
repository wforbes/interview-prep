/**
 * Remove Duplicates from Sorted Array
 * Time: O(n), Space: O(1)
 *
 * Two pointer approach - one for reading, one for writing unique elements
 */
export function removeDuplicates(nums: number[]): number {
	let k = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[k - 1]) {
			nums[k] = nums[i];
			k += 1;
		}
	}

	return k;
}
