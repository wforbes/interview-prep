/**
 * Remove Element - Simple but Slow Approach
 * Time: O(n²), Space: O(1)
 *
 * Note: Using splice repeatedly is O(n²) due to array shifts
 */
export function removeElement2(nums: number[], val: number): number {
	let incomplete = true;
	let a = 0;

	while (incomplete) {
		if (nums[a] === val) {
			nums.splice(a, 1);
		} else {
			a++;
		}

		if (a >= nums.length) {
			incomplete = false;
		}
	}

	return nums.length;
}
