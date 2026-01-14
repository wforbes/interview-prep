import { describe, it, expect } from "vitest";
import { numMatchingSubseq } from "./solution2";
import { s as s24 } from "./testStr24";
import { words as words24 } from "./testWords24";

describe("792. Number of Matching Subsequences", () => {
	it("handles leetcode example 1", () => {
		expect(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])).toEqual(
			3
		);
	});
	it("handles leetcode example 2", () => {
		expect(
			numMatchingSubseq("dsahjpjauf", [
				"ahjpjau",
				"ja",
				"ahbwzgqnuk",
				"tnmlanowax",
			])
		).toEqual(2);
	});
	it("handles empty string s", () => {
		expect(numMatchingSubseq("", ["a", "b", "c"])).toEqual(0);
	});
	it("handles empty words array", () => {
		expect(numMatchingSubseq("abc", [])).toEqual(0);
	});
	it("handles all words being subsequences", () => {
		expect(
			numMatchingSubseq("abcdef", [
				"a",
				"ab",
				"abc",
				"abcd",
				"abcde",
				"abcdef",
			])
		).toEqual(6);
	});
	it("handles no words being subsequences", () => {
		expect(numMatchingSubseq("xyz", ["a", "b", "c"])).toEqual(0);
	});
	it("handles words with repeated characters", () => {
		expect(
			numMatchingSubseq("aaabbbccc", [
				"aaa",
				"bbb",
				"ccc",
				"abab",
				"acac",
			])
		).toEqual(3);
	});
	it("handles extreme test case #24 on leetcode", () => {
		expect(numMatchingSubseq(s24, words24)).toEqual(1000);
	});
});
