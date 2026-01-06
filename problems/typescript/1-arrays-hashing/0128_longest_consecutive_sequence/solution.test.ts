import { describe, it, expect } from "vitest";
import { longestConsecutive } from "./solution";

describe("Longest Consecutive Sequence", () => {
	it("should return 4 for [100, 4, 200, 1, 3, 2]", () => {
		expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
	});

	it("should return 3 for [1,0,1,2]", () => {
		expect(longestConsecutive([1, 0, 1, 2])).toBe(3);
	});

	it("should return 0 for an empty array", () => {
		expect(longestConsecutive([])).toBe(0);
	});

	it("should return 9 for [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]", () => {
		expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
	});

	it("should handle negative numbers", () => {
		expect(longestConsecutive([-1, -2, -3, 0, 1])).toBe(5);
	});

	it("should handle single element array", () => {
		expect(longestConsecutive([10])).toBe(1);
	});
});
