/**
 * Top K Frequent Elements - Bucket Sort Approach
 * Time: O(n), Space: O(n)
 *
 * Uses bucket sort where index represents frequency
 * and value is array of numbers with that frequency
 */
export function topKFrequent(nums: number[], k: number): number[] {
	const count: Record<number, number> = {};
	const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

	// Count frequency of each number
	for (let i = 0; i < nums.length; i++) {
		count[nums[i]] = (count[nums[i]] || 0) + 1;
	}

	// Place numbers in buckets based on their frequency
	// freq[i] contains all numbers that appear i times
	const props = Object.keys(count);
	for (let i = 0; i < props.length; i++) {
		const num = parseInt(props[i]);
		const frequency = count[num];
		freq[frequency].push(num);
	}

	// Collect top k frequent elements starting from highest frequency
	const result: number[] = [];
	for (let i = freq.length - 1; i > 0; i--) {
		for (const n of freq[i]) {
			result.push(n);
			if (result.length === k) {
				return result;
			}
		}
	}

	return result;
}
