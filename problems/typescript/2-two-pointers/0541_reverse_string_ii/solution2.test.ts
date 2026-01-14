import { describe, it, expect } from "vitest";
import { reverseStr2 } from "./solution2";

describe("541. Reverse String II - Slice Reverse Approach", () => {
	it("handles example 1", () => {
		const s = "abcdefg";
		const k = 2;
		const expected = "bacdfeg";
		expect(reverseStr2(s, k)).toBe(expected);
	});

	it("handles example 2", () => {
		const s = "abcd";
		const k = 2;
		const expected = "bacd";
		expect(reverseStr2(s, k)).toBe(expected);
	});

	it("handles single character string", () => {
		const s = "a";
		const k = 2;
		const expected = "a";
		expect(reverseStr2(s, k)).toBe(expected);
	});

	it("handles k larger than string length", () => {
		const s = "abc";
		const k = 5;
		const expected = "cba";
		expect(reverseStr2(s, k)).toBe(expected);
	});
	it("handles k equal to string length", () => {
		const s = "abcd";
		const k = 4;
		const expected = "dcba";
		expect(reverseStr2(s, k)).toBe(expected);
	});

	it("handles empty string", () => {
		const s = "";
		const k = 2;
		const expected = "";
		expect(reverseStr2(s, k)).toBe(expected);
	});
});
