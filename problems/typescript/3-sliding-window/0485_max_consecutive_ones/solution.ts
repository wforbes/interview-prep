export function findMaxConsecutiveOnes(nums: number[]): number {
	if (nums.length === 1) {
		return nums[0] === 1 ? 1 : 0;
	}
	let maxSeries = 0;
	let a = 0;
	let b = 0;
	while (a < nums.length) {
		if (nums[a] !== 1) {
			a++;
			b++;
			continue;
		}
		while (b < nums.length && nums[b] === 1) {
			b++;
		}
		maxSeries = Math.max(maxSeries, b - a);
		a = b + 1;
		b = a;
	}
	return maxSeries;
}
