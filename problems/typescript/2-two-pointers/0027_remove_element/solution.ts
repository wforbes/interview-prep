/**
 * Remove Element - Optimized Two Pointer Approach
 * Time: O(n), Space: O(1)
 *
 * Copy non-target elements to front of array, then optionally remove excess
 */
export function removeElement(nums: number[], val: number): number {
	//const orgEnd = nums.length - 1; // Original length before removals
	let k = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i];
			k++;
		}
	}

	// Remove excess elements from end
	/*for (let j = 0; j < orgEnd - k + 1; j++) {
		nums.pop();
	}*/

	return k;
}
