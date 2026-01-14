/**
 * Add Two Numbers - BigInt String Conversion Approach
 * Time: O(m+n), Space: O(m+n)
 *
 * Note: Less efficient, uses string conversion and BigInt
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let first = "";
	let second = "";

	while (l1?.next !== undefined || l2?.next !== undefined) {
		if (l1?.val !== undefined) {
			first = l1.val + first;
		}
		if (l2?.val !== undefined) {
			second = l2?.val + second;
		}

		l1 = l1?.next || null;
		l2 = l2?.next || null;
	}

	const result = (BigInt(first) + BigInt(second)) + "";
	let solution: ListNode | null = null;
	let prev: ListNode | null = null;

	for (let i = 0; i < result.length; i++) {
		solution = new ListNode(+result[i], (prev ?? undefined));
		prev = solution;
	}

	return solution;
}
