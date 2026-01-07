import { describe, it, expect } from "vitest";
import { strStr2 } from "./solution2";

describe("28. Find the Index of the First Occurrence in a String (sln2)", () => {
	it('in="hello", needle="ll"; out=2', () => {
		const haystack = "hello";
		const needle = "ll";
		const expected = 2;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});

	it('in="aaaaa", needle="bba"; out=-1', () => {
		const haystack = "aaaaa";
		const needle = "bba";
		const expected = -1;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});

	it('in="", needle=""; out=-1', () => {
		const haystack = "";
		const needle = "";
		const expected = -1;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});

	it('in="a", needle="a"; out=0', () => {
		const haystack = "a";
		const needle = "a";
		const expected = 0;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});

	it('in="abc", needle="c"; out=2', () => {
		const haystack = "abc";
		const needle = "c";
		const expected = 2;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});

	it('in="mississippi", needle="issip"; out=4', () => {
		const haystack = "mississippi";
		const needle = "issip";
		const expected = 4;
		const result = strStr2(haystack, needle);
		expect(result).toBe(expected);
	});
});
