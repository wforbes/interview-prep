import { describe, it, expect } from "vitest";
import { spiralOrder } from "./solution";

describe("Spiral Matrix", () => {
	it("should return [1,2,3,6,9,8,7,4,5] for [[1,2,3],[4,5,6],[7,8,9]]", () => {
		expect(
			spiralOrder([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			])
		).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
	});
	it("should return [1,2,3,4,8,12,11,10,9,5,6,7] for [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
		expect(
			spiralOrder([
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12],
			])
		).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
	});
	it("should return [] for an empty matrix", () => {
		expect(spiralOrder([])).toEqual([]);
	});
});
