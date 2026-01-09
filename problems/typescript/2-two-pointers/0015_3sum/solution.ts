/**
 * 3Sum
 * https://leetcode.com/problems/3sum
 * Time: O(n²), Space: O(1) excluding output
 *
 * Sort array then use two pointers for each element
 * First completed: 10/02/2025
 */
export function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);
	const n = nums.length;
	const answer: number[][] = [];

	for (let i = 0; i < nums.length; i++) {
		// Early termination - all remaining numbers are positive
		if (nums[i] > 0) {
			break;
		}

		// Skip duplicates for first number
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		let left = i + 1;
		let right = n - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
				answer.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;

				// Skip duplicates for second number
				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}

				// Skip duplicates for third number
				while (left < right && nums[right] === nums[right + 1]) {
					right--;
				}
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return answer;
}
