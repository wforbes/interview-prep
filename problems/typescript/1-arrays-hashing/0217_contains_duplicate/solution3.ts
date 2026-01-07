/**
 * Contains Duplicate - Set Size Comparison
 * Time: O(n), Space: O(n)
 * Most concise approach
 */
export function hasDuplicate3(nums: number[]): boolean {
	return nums.length > new Set(nums).size;
}
