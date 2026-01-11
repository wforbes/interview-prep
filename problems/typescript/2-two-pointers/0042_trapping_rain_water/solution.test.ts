import { describe, it, expect } from "vitest";
import { trapWater } from "./solution";
import { trapWater2 } from "./solution2";

describe("42. Trapping Rain Water", () => {
	it("(v1): handles leetcode example 1", () => {
		expect(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
	});

	it("(v1) handles leetcode example 2", () => {
		expect(trapWater([4, 2, 0, 3, 2, 5])).toEqual(9);
	});

	it("(v2): handles leetcode example 1", () => {
		expect(trapWater2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
	});

	it("(v2) handles leetcode example 2", () => {
		expect(trapWater2([4, 2, 0, 3, 2, 5])).toEqual(9);
	});
});
