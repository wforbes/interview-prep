/**
 * Reverse Linked List - Iterative Approach
 * Time: O(n), Space: O(1)
 *
 * Classic three-pointer technique
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let curr: ListNode | null = head;
	let next: ListNode | null = null;

	while (curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}
