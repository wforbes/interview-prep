// reviewing/relearning 1/8/26

export function threeSum(nums: number[]): number[][] {
	const result = [];
	nums.sort((a, b) => a - b);

	// loop for first item in triplet
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			// avoid using the same value in the
			//  same position twice
			continue;
		}

		// use two sum II pattern for computing the other
		//  two numbers in the triplet, including the `i`
		//  index value
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum > 0) {
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				// to ensure we aren't using a duplicate value
				//  in the second triplet value, we need to skip
				//  left ahead if the previous left value was a duplicate
				while (left < right && nums[left] == nums[left - 1]) {
					left++;
				}
			}
		}
	}
	return result;
}
