import { describe, expect, it } from "vitest";
import { threeSum } from "./solution2";

describe("15. 3Sum - Solution 2", () => {
	//case: [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]
	//expect: [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
	it("should return correct triplets for mixed numbers", () => {
		const nums = [
			2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10,
		];
		const expected = [
			[-10, 5, 5],
			[-5, 0, 5],
			[-4, 2, 2],
			[-3, -2, 5],
			[-3, 1, 2],
			[-2, 0, 2],
		];
		const result = threeSum(nums);
		expect(result).toEqual(expected);
	});

	//Input: nums = [-1,0,1,2,-1,-4]
	//Output: [[-1,-1,2],[-1,0,1]]
	it("should return correct triplets for example input", () => {
		const nums = [-1, 0, 1, 2, -1, -4];
		const expected = [
			[-1, -1, 2],
			[-1, 0, 1],
		];
		const result = threeSum(nums);
		expect(result).toEqual(expected);
	});

	//Input: nums = []
	//Output: []
	it("should return empty array for empty input", () => {
		const nums: number[] = [];
		const expected: number[][] = [];
		const result = threeSum(nums);
		expect(result).toEqual(expected);
	});

	//Input: nums = [0]
	//Output: []
	it("should return empty array for single zero input", () => {
		const nums = [0];
		const expected: number[][] = [];
		const result = threeSum(nums);
		expect(result).toEqual(expected);
	});
});
