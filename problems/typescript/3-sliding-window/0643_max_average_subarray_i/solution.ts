export function findMaxAverage(nums: number[], k: number): number {
	if (nums.length < k) {
		return 0;
	}
	let maxSum = 0;
	// get sum of first window
	for (let i = 0; i < k; i++) {
		maxSum += nums[i];
		console.log(`adding... ${nums[i]} to maxSum=${maxSum}`);
	}
	let windowSum = maxSum;
	for (let i = k; i < nums.length; i++) {
		windowSum += nums[i] - nums[i - k];
		//windowSum += nums[i];
		console.log(`${i} windowSum... ${windowSum}`);
		maxSum = Math.max(maxSum, windowSum);
	}
	console.log(maxSum);
	return maxSum / k;
}
