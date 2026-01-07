/**
 * Two Sum - Two Pointer Approach (requires sorting)
 * Time: O(n log n), Space: O(1)
 * Note: This approach modifies the array and returns values, not indices
 */
export function twoSum2(arr: number[], target: number): number[] {
	arr.sort((a, b) => a - b);

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];
		if (sum === target) {
			return [arr[left], arr[right]];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return [];
}
