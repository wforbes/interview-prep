/**
 * Design Browser History
 * https://leetcode.com/problems/design-browser-history/
 *
 * Doubly linked list implementation for browser history
 */

class ListNode {
	val: string;
	prev: ListNode | null;
	next: ListNode | null;
	constructor(val?: string, prev?: ListNode | null, next?: ListNode | null) {
		this.val = (val === undefined ? "" : val);
		this.prev = (prev === undefined ? null : prev);
		this.next = (next === undefined ? null : next);
	}
}

export class BrowserHistory {
	head: ListNode;
	currentPage: ListNode;

	constructor(homepage: string) {
		this.head = new ListNode(homepage);
		this.currentPage = this.head;
	}

	visit(url: string): void {
		const newPage = new ListNode(url);
		const oldCurrent = this.currentPage;
		oldCurrent.next = newPage;
		newPage.prev = oldCurrent;
		this.head = newPage;
		this.currentPage = this.head;
	}

	back(steps: number): string {
		while (steps > 0 && this.currentPage.prev) {
			this.currentPage = this.currentPage.prev;
			steps--;
		}
		return this.currentPage.val;
	}

	forward(steps: number): string {
		while (steps > 0 && this.currentPage.next) {
			this.currentPage = this.currentPage.next;
			steps--;
		}
		return this.currentPage.val;
	}

	getFullHistory(): string {
		let curr: ListNode | null = this.head;
		let response = "";

		while (curr !== null) {
			if (curr === this.currentPage && curr.val === this.currentPage.val) {
				response += `[${curr.val}]->`;
			} else {
				response += `${curr.val}->`;
			}
			curr = curr.prev;
		}

		return response + "(end)";
	}

	getCurrentPage(): string {
		return this.currentPage.val;
	}
}
