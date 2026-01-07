import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./solution";

describe("26. Remove Duplicates from Sorted Array", () => {
	// [1, 1, 2] => 2, [1, 2, _]
	it("in=[1, 1, 2]; out=2; arr updated as [1, 2, _]", () => {
		const nums = [1, 1, 2];
		const expectedLength = 2;
		const expectedNums = [1, 2];

		const length = removeDuplicates(nums);

		expect(length).toBe(expectedLength);
		for (let i = 0; i < length; i++) {
			expect(nums[i]).toBe(expectedNums[i]);
		}
	});

	//Input: nums = [0,0,1,1,1,2,2,3,3,4]
	//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
	it("in=[0,0,1,1,1,2,2,3,3,4]; out=5; arr updated as [0,1,2,3,4,_,_,_,_,_]", () => {
		const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
		const expectedLength = 5;
		const expectedNums = [0, 1, 2, 3, 4];

		const length = removeDuplicates(nums);
		expect(length).toBe(expectedLength);
		for (let i = 0; i < length; i++) {
			expect(nums[i]).toBe(expectedNums[i]);
		}
	});
});
