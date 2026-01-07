/**
 * Contains Duplicate
 * Time: O(n), Space: O(n)
 */
export function containsDuplicate(nums: number[]): boolean {
	// init a set to keep track of values we've seen
	const history = new Set<number>();
	// loop through the nums array
	for (let i = 0; i < nums.length; i++) {
		// check to see if our Set contains this iter num
		if (history.has(nums[i])) {
			//  if it does we found a duplicate, return true
			return true;
		}
		// add this iter num to the Set
		history.add(nums[i]);
	}
	// return false, no dupe found
	return false;
}
