// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/
// create a new set from the number array
// initialize a number var maxSeq to track the longest sequence found
// for every number in the set
// - if the number-1 is NOT in the set we may have found the start of a sequence
// -- init a number var 'len' to 1, to keep track of this possible sequence's length
// -- loop forward checking if the set has num + length, incrementing length each time
// -- after the loop, save this length in the maxSeq var if its larger than the current maxSeq value
// return the maxSeq variable

export function longestConsecutive(nums: number[]): number {
	const set = new Set<number>(nums);
	let maxSeq = 0;
	for (let num of set) {
		if (!set.has(num - 1)) {
			let len = 1;
			while (set.has(num + len)) len++;
			if (len > maxSeq) {
				maxSeq = len;
			}
		}
	}

	return maxSeq;
}
