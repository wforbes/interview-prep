import { describe, it, expect } from "vitest";
import { findMaxConsecutiveOnes } from "./solution";

describe("485. Max Consecutive Ones", () => {
	it("two item array, ending in 1", () => {
		const arr = [0, 1];
		expect(findMaxConsecutiveOnes(arr)).toEqual(1);
	});

	it("two item array, all 1s", () => {
		const arr = [1, 1];
		expect(findMaxConsecutiveOnes(arr)).toEqual(2);
	});

	it("leetcode example test case", () => {
		const arr = [1, 1, 0, 1, 1, 1];
		expect(findMaxConsecutiveOnes(arr)).toEqual(3);
	});

	it("array length 6 with mixed 1s and 0s", () => {
		const arr = [1, 0, 1, 1, 0, 1];
		expect(findMaxConsecutiveOnes(arr)).toEqual(2);
	});

	it("arr length 3 with no 1s", () => {
		const arr = [0, 0, 0];
		expect(findMaxConsecutiveOnes(arr)).toEqual(0);
	});
});
