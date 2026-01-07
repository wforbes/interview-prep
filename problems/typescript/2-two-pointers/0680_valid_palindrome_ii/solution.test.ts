import { describe, it, expect } from "vitest";
import { validPalindrome } from "./solution";

describe("680. Valid Palindrome II", () => {
	it("returns true for `aba`", () => {
		expect(validPalindrome("aba")).toBe(true);
	});
	it("returns true for `abca`", () => {
		expect(validPalindrome("abca")).toBe(true);
	});
	it("returns false for `abc`", () => {
		expect(validPalindrome("abc")).toBe(false);
	});
});
