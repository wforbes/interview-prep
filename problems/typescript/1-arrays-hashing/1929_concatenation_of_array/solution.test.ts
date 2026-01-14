import { describe, it, expect } from "vitest";
import { getConcatenation } from "./solution";

describe("1929. Concatenation of Array", () => {
	it("handles example 1", () => {
		const nums = [1, 2, 1];
		const expected = [1, 2, 1, 1, 2, 1];
		expect(getConcatenation(nums)).toEqual(expected);
	});

	it("handles example 2", () => {
		const nums = [1, 3, 2, 1];
		const expected = [1, 3, 2, 1, 1, 3, 2, 1];
		expect(getConcatenation(nums)).toEqual(expected);
	});

	it("handles empty array", () => {
		const nums: number[] = [];
		const expected: number[] = [];
		expect(getConcatenation(nums)).toEqual(expected);
	});

	it("handles single element array", () => {
		const nums = [5];
		const expected = [5, 5];
		expect(getConcatenation(nums)).toEqual(expected);
	});

	it("handles large array", () => {
		const nums = Array.from({ length: 1000 }, (_, i) => i);
		const expected = [...nums, ...nums];
		expect(getConcatenation(nums)).toEqual(expected);
	});

	it("handles negative numbers", () => {
		const nums = [-1, -2, -3];
		const expected = [-1, -2, -3, -1, -2, -3];
		expect(getConcatenation(nums)).toEqual(expected);
	});
});
