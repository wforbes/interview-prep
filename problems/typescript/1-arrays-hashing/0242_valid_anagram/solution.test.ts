import { describe, it, expect } from "vitest";
import { isAnagram } from "./solution";

describe("242. Valid Anagram", () => {
	it("should return true for valid anagrams", () => {
		expect(isAnagram("anagram", "nagaram")).toBe(true);
		expect(isAnagram("listen", "silent")).toBe(true);
		expect(isAnagram("racecar", "carerac")).toBe(true);
	});

	it("should return false for invalid anagrams", () => {
		expect(isAnagram("rat", "car")).toBe(false);
		expect(isAnagram("hello", "world")).toBe(false);
		expect(isAnagram("test", "tseta")).toBe(false);
	});

	it("should handle edge cases", () => {
		expect(isAnagram("", "")).toBe(true);
		expect(isAnagram("a", "a")).toBe(true);
		expect(isAnagram("a", "b")).toBe(false);
	});
});
