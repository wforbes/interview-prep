import { describe, it, expect } from "vitest";
import { removeElement } from "./solution";

describe("27. Remove Element", () => {
	it("should remove all instances of the given value and return the new length", () => {
		const nums1 = [3, 2, 2, 3];
		const val1 = 3;
		const length1 = removeElement(nums1, val1);
		expect(length1).toBe(2);
		expect(nums1.slice(0, length1)).toEqual([2, 2]);
		const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
		const val2 = 2;
		const length2 = removeElement(nums2, val2);
		expect(length2).toBe(5);
		expect(nums2.slice(0, length2)).toEqual([0, 1, 3, 0, 4]);
	});

	it("should handle edge cases", () => {
		const nums3: number[] = [];
		const val3 = 1;
		const length3 = removeElement(nums3, val3);
		expect(length3).toBe(0);
		expect(nums3.slice(0, length3)).toEqual([]);
		const nums4 = [1, 1, 1, 1];
		const val4 = 1;
		const length4 = removeElement(nums4, val4);
		expect(length4).toBe(0);
		expect(nums4.slice(0, length4)).toEqual([]);
		const nums5 = [1, 2, 3, 4];
		const val5 = 5;
		const length5 = removeElement(nums5, val5);
		expect(length5).toBe(4);
		expect(nums5.slice(0, length5)).toEqual([1, 2, 3, 4]);
	});
});
