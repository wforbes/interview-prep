import { describe, expect, it } from "vitest";
import { maxProfit } from "./solution";

describe("121. Best Time to Buy and Sell Stock", () => {
	it("handles leetcode example 1", () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
	});
	it("handles leetcode example 2", () => {
		expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
	});
	it("handles a case with multiple profit opportunities", () => {
		expect(maxProfit([3, 2, 6, 5, 0, 3])).toEqual(4);
	});
	it("handles a case with constant prices", () => {
		expect(maxProfit([5, 5, 5, 5, 5])).toEqual(0);
	});
	it("handles a case with increasing prices", () => {
		expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
	});
	it("handles a case with decreasing prices", () => {
		expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
	});
});
