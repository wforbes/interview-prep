import { describe, it, expect } from "vitest";
import { containsDuplicate } from "./solution";

describe("217. Contains Duplicate", () => {
	// Input: nums = [1,2,3,1]
	// Output: true
	it("in=[1,2,3,1]; out=true", () => {
		const nums = [1, 2, 3, 1];
		const expected = true;
		const result = containsDuplicate(nums);
		expect(result).toBe(expected);
	});

	// Input: nums = [1,2,3,4]
	// Output: false
	it("in=[1,2,3,4]; out=false", () => {
		const nums = [1, 2, 3, 4];
		const expected = false;
		const result = containsDuplicate(nums);
		expect(result).toBe(expected);
	});
	// Input: nums = [1,1,1,3,3,4,3,2,4,2]
	// Output: true
	it("in=[1,1,1,3,3,4,3,2,4,2]; out=true", () => {
		const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
		const expected = true;
		const result = containsDuplicate(nums);
		expect(result).toBe(expected);
	});
});
