/**
 * Add Two Numbers - Carry Propagation Approach
 * https://leetcode.com/problems/add-two-numbers
 * Time: O(max(m,n)), Space: O(max(m,n))
 *
 * Most efficient solution using carry
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const newNode = new ListNode(0);
	let head: ListNode | null = newNode;
	let sum = 0;
	let carry = 0;

	while (l1 !== null || l2 !== null || sum > 0) {
		if (l1 !== null) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2 !== null) {
			sum += l2.val;
			l2 = l2.next;
		}
		if (sum > 9) {
			carry = 1;
			sum = sum - 10;
		}
		head.next = new ListNode(sum);
		head = head.next;
		sum = carry;
		carry = 0;
	}

	return newNode.next;
}
