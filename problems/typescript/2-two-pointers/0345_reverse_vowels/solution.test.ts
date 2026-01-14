import { describe, it, expect } from "vitest";
import { reverseVowels } from "./solution";
import { reverseVowels2 } from "./solution2";
import { reverseVowels3 } from "./solution3";

const solutions = {
	"solution 1": reverseVowels,
	"solution 2": reverseVowels2,
	"solution 3": reverseVowels3,
};
const testCases = [
	{
		name: "handles example 1",
		input: "IceCreAm",
		expected: "AceCreIm",
	},
	{ name: "handles example 2", input: "leetcode", expected: "leotcede" },
	{ name: "handles simple word", input: "hello", expected: "holle" },
	{ name: "handles two vowels", input: "aA", expected: "Aa" },
	{ name: "handles racecar", input: "racecar", expected: "racecar" },
	{ name: "handles three consonants", input: "bcd", expected: "bcd" },
];
Object.entries(solutions).forEach(([solutionName, solutionFn]) => {
	describe(`345. Reverse Vowels of a String - ${solutionName}`, () => {
		for (const { name, input, expected } of testCases) {
			it(name, () => {
				expect(solutionFn(input)).toBe(expected);
			});
		}
	});
});
