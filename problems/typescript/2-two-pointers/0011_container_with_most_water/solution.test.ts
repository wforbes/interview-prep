import { describe, it, expect } from "vitest";
import { maxArea } from "./solution";

describe("11. Container With Most Water", () => {
	it("Handles leetcode example test cases", () => {
		expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
		expect(maxArea([1, 1])).toBe(1);
	});

	it("Handles additional test cases", () => {
		expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
		expect(maxArea([1, 2, 1])).toBe(2);
		expect(maxArea([1, 3, 2, 5, 25, 24, 5])).toBe(24);
		expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
		expect(maxArea([1, 2, 4, 3])).toBe(4);
	});
});
