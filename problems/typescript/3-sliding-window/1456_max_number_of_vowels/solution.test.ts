import { maxVowels } from "./solution";
import { describe, expect, it } from "vitest";

describe("1456. Maximum Number of Vowels in a Substring of Given Length", () => {
	it("handles leetcode example 1", () => {
		expect(maxVowels("abciiidef", 3)).toEqual(3);
	});
	it("handles leetcode example 2", () => {
		expect(maxVowels("aeiou", 2)).toEqual(2);
	});
	it("handles leetcode example 3", () => {
		expect(maxVowels("leetcode", 3)).toEqual(2);
	});
	it("handles a case with no vowels", () => {
		expect(maxVowels("bcdfghjklmnpqrstvwxyz", 5)).toEqual(0);
	});
	it("handles a case where k equals the string length", () => {
		expect(maxVowels("aeioubcdfg", 10)).toEqual(5);
	});
});
