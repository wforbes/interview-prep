import { describe, it, expect } from "vitest";
import { isSubsequence } from "./solution";
import { isSubsequence2 } from "./solution2";
import { isSubsequence3 } from "./solution3";

const solutions = {
	"solution 1": isSubsequence,
	"solution 2": isSubsequence2,
	"solution 3": isSubsequence3,
};
const testCases = [
	{
		name: "handles example 1",
		s: "abc",
		t: "ahbgdc",
		expected: true,
	},
	{
		name: "handles example 2",
		s: "axc",
		t: "ahbgdc",
		expected: false,
	},
	{ name: "handles empty s", s: "", t: "ahbgdc", expected: true },
	{ name: "handles empty t", s: "abc", t: "", expected: false },
	{ name: "handles s longer than t", s: "abcd", t: "abc", expected: false },
	{ name: "handles identical strings", s: "abc", t: "abc", expected: true },
	{ name: "handles single character match", s: "a", t: "a", expected: true },
	{
		name: "handles single character no match",
		s: "a",
		t: "b",
		expected: false,
	},
	{
		name: "handles repeated characters in t",
		s: "aaa",
		t: "aaabaaa",
		expected: true,
	},
];

Object.entries(solutions).forEach(([solutionName, solutionFn]) => {
	describe(`392. Is Subsequence - ${solutionName}`, () => {
		for (const { name, s, t, expected } of testCases) {
			it(name, () => {
				expect(solutionFn(s, t)).toBe(expected);
			});
		}
	});
});
