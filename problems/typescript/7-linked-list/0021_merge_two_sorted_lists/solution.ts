/**
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time: O(m+n), Space: O(1)
 *
 * Clean approach with ternary for remaining elements
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	const head = new ListNode(0);
	let curr: ListNode | null = head;

	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}
		curr = curr.next;
	}

	// Append remaining elements
	curr.next = (list1 !== null) ? list1 :
		(list2 !== null) ? list2 :
			null;

	return head.next;
}
