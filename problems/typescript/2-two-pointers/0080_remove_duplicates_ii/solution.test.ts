import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./solution";

describe("80. Remove Duplicates from Sorted Array II", () => {
	it("should remove duplicates allowing at most two occurrences", () => {
		const nums1 = [1, 1, 1, 2, 2, 3];
		const k1 = removeDuplicates(nums1);
		expect(k1).toBe(5);
		expect(nums1.slice(0, k1)).toEqual([1, 1, 2, 2, 3]);
	});
	it("should handle larger arrays with multiple duplicates", () => {
		const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
		const k2 = removeDuplicates(nums2);
		expect(k2).toBe(7);
		expect(nums2.slice(0, k2)).toEqual([0, 0, 1, 1, 2, 3, 3]);
	});

	it("should handle edge cases", () => {
		const nums3: number[] = [];
		const k3 = removeDuplicates(nums3);
		expect(k3).toBe(0);
		expect(nums3.slice(0, k3)).toEqual([]);
	});

	it("should handle array with single element", () => {
		const nums4 = [1];
		const k4 = removeDuplicates(nums4);
		expect(k4).toBe(1);
		expect(nums4.slice(0, k4)).toEqual([1]);
	});

	it("should handle array with two identical elements", () => {
		const nums5 = [1, 1];
		const k5 = removeDuplicates(nums5);
		expect(k5).toBe(2);
		expect(nums5.slice(0, k5)).toEqual([1, 1]);
	});
});
