import { describe, it, expect } from "vitest";
import { reverseWords } from "./solution";

describe("151. Reverse Words in a String", () => {
	it("handles example 1", () => {
		const s = "the sky is blue";
		const expected = "blue is sky the";
		expect(reverseWords(s)).toBe(expected);
	});
	it("handles example 2", () => {
		const s = "  hello world  ";
		const expected = "world hello";
		expect(reverseWords(s)).toBe(expected);
	});
	it("handles example 3", () => {
		const s = "a good   example";
		const expected = "example good a";
		expect(reverseWords(s)).toBe(expected);
	});

	it("handles single word", () => {
		const s = "hello";
		const expected = "hello";
		expect(reverseWords(s)).toBe(expected);
	});

	it("handles empty string", () => {
		const s = "   ";
		const expected = "";
		expect(reverseWords(s)).toBe(expected);
	});

	it("handles multiple spaces between words", () => {
		const s = "  Bob    Loves  Alice   ";
		const expected = "Alice Loves Bob";
		expect(reverseWords(s)).toBe(expected);
	});

	it("handles punctuation", () => {
		const s = "Hello, world! This is a test.";
		const expected = "test. a is This world! Hello,";
		expect(reverseWords(s)).toBe(expected);
	});
});
