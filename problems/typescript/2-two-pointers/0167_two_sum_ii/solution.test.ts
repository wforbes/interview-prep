import { describe, it, expect } from "vitest";
import { twoSum } from "./solution";

describe("167. Two Sum II - Input Array Is Sorted", () => {
	it("should return [1, 2] for numbers [2, 7, 11, 15] and target 9", () => {
		const numbers1 = [2, 7, 11, 15];
		const target1 = 9;
		expect(twoSum(numbers1, target1)).toEqual([1, 2]);
	});
	it("should return [4,5] for numbers [1, 2, 3, 4, 4, 9, 56, 90] and target 8", () => {
		const numbers2 = [1, 2, 3, 4, 4, 9, 56, 90];
		const target2 = 8;
		expect(twoSum(numbers2, target2)).toEqual([4, 5]);
	});

	it("should handle the smallest input", () => {
		const numbers3 = [1, 3];
		const target3 = 4;
		expect(twoSum(numbers3, target3)).toEqual([1, 2]);
	});

	it("should return an empty array when no solution exists", () => {
		const numbers4 = [1, 2, 3, 4, 5];
		const target4 = 10;
		expect(twoSum(numbers4, target4)).toEqual([]);
	});
});
