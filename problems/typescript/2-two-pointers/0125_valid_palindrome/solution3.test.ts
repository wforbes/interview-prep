import { describe, it, expect } from "vitest";
import { isPalindrome } from "./solution3";

describe("Valid Palindrome", () => {
	// Input: s = "A man, a plan, a canal: Panama", Output: true
	it('should return true for "A man, a plan, a canal: Panama"', () => {
		expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
	});

	// Input: s = "race a car", Output: false
	it('should return false for "race a car"', () => {
		expect(isPalindrome("race a car")).toBe(false);
	});

	// Input: s = " ", Output: true
	it('should return true for " "', () => {
		expect(isPalindrome(" ")).toBe(true);
	});

	// Input: s = "0P", Output: false
	it('should return false for "0P"', () => {
		expect(isPalindrome("0P")).toBe(false);
	});

	// Input: s = "a.", Output: true
	it('should return true for "a."', () => {
		expect(isPalindrome("a.")).toBe(true);
	});
});
