import { describe, it, expect } from "vitest";
import { twoSum } from "./solution";
import { twoSum2 } from "./solution2";

describe("Two Sum", () => {
	it("should return indices [0, 1] for [2,7,11,15] with target 9", () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	});

	it("should return indices [1, 2] for [3,2,4] with target 6", () => {
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	});

	it("should return indices [0, 1] for [3,3] with target 6", () => {
		expect(twoSum([3, 3], 6)).toEqual([0, 1]);
	});

	it("should handle negative numbers", () => {
		expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
	});

	it("should handle zero in array", () => {
		expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
	});

	it("should work with large numbers", () => {
		expect(
			twoSum([1000000000, 2000000000, 3000000000], 3000000000)
		).toEqual([0, 1]);
	});
});

describe("Two Sum 2", () => {
	it("should return *VALUES* [2, 7] for [2,7,11,15] with target 9", () => {
		expect(twoSum2([2, 7, 11, 15], 9)).toEqual([2, 7]);
	});

	it("should return *VALUES* [2, 4] for [3,2,4] with target 6", () => {
		expect(twoSum2([3, 2, 4], 6)).toEqual([2, 4]);
	});

	it("should return *VALUES* [3, 3] for [3,3] with target 6", () => {
		expect(twoSum2([3, 3], 6)).toEqual([3, 3]);
	});

	it("should handle negative numbers", () => {
		expect(twoSum2([-1, -2, -3, -4, -5], -8)).toBeOneOf([
			[-5, -3],
			[-3, -5],
		]);
	});

	it("should handle zero in array", () => {
		expect(twoSum2([0, 4, 3, 0], 0)).toEqual([0, 0]);
	});

	it("should work with large numbers", () => {
		expect(
			twoSum2([1000000000, 2000000000, 3000000000], 3000000000)
		).toEqual([1000000000, 2000000000]);
	});
});
