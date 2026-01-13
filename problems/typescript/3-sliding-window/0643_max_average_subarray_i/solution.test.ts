import { describe, expect, it } from "vitest";
import { findMaxAverage } from "./solution";

describe("643. Maximum Average Subarray I", () => {
	it("handles leetcode example 1", () => {
		expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
	});
});
