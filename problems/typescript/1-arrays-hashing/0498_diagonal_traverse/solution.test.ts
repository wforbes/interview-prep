import { describe, it, expect } from "vitest";
import { findDiagonalOrder } from "./solution";

describe("Diagonal Traverse", () => {
	it("should return [1,2,4,7,5,3,6,8,9] for [[1,2,3],[4,5,6],[7,8,9]]", () => {
		expect(
			findDiagonalOrder([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			])
		).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
	});
	it("should return [1,2,3,4] for [[1,2],[3,4]]", () => {
		expect(
			findDiagonalOrder([
				[1, 2],
				[3, 4],
			])
		).toEqual([1, 2, 3, 4]);
	});
	it("should return [1] for [[1]]", () => {
		expect(findDiagonalOrder([[1]])).toEqual([1]);
	});
});
