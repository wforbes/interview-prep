/**
 * Design Linked List
 * https://leetcode.com/problems/design-linked-list/
 *
 * Singly linked list implementation with sentinel head node
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export class MyLinkedList {
	head: ListNode;
	tail: ListNode;

	constructor() {
		this.head = new ListNode(-1);
		this.tail = this.head;
	}

	get(index: number): number {
		if (index < 0) return -1;
		let i = 0;
		let curr: ListNode | null = this.head;

		while (i < index + 1) {
			if (curr.next === null) {
				return -1;
			}
			curr = curr.next;
			i++;
		}

		return curr.val;
	}

	addAtHead(val: number): void {
		const _head = this.head;
		const newHead = new ListNode(val, _head.next);
		this.head.next = newHead;
		if (newHead.next === null) {
			this.tail = newHead;
		}
	}

	addAtTail(val: number): void {
		this.tail.next = new ListNode(val);
		this.tail = this.tail.next;
	}

	addAtIndex(index: number, val: number): void {
		let curr: ListNode | null = this.head;
		let i = 0;

		while (i < index && curr !== null) {
			i++;
			curr = curr.next;
		}

		if (curr) {
			const next = curr.next;
			curr.next = new ListNode(val, next);
			if (curr == this.tail) {
				this.tail = curr.next;
			}
		}
	}

	deleteAtIndex(index: number): void {
		let curr: ListNode | null = this.head;
		let i = 0;

		while (i < index && curr !== null) {
			i++;
			curr = curr.next;
		}

		if (curr && curr.next) {
			if (curr.next == this.tail) {
				this.tail = curr;
			}
			curr.next = curr.next.next;
		}
	}
}
