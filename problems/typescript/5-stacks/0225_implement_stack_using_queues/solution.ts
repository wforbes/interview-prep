/**
 * Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/
 * Time: push O(n), pop/top/empty O(1), Space: O(n)
 *
 * Uses single queue, reorders elements on push to maintain LIFO
 */

// Simple Queue implementation
class Queue<T> {
	private items: T[];

	constructor() {
		this.items = [];
	}

	push(item: T): void {
		this.items.push(item);
	}

	pop(): T | undefined {
		return this.items.shift();
	}

	front(): T | undefined {
		return this.items[0];
	}

	size(): number {
		return this.items.length;
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}
}

export class MyStack {
	private q: Queue<number>;

	constructor() {
		this.q = new Queue<number>();
	}

	push(x: number): void {
		this.q.push(x);

		// Reorder queue to maintain LIFO property
		for (let i = this.q.size() - 1; i > 0; i--) {
			this.q.push(this.q.pop()!);
		}
	}

	pop(): number {
		return this.q.pop()!;
	}

	top(): number {
		return this.q.front()!;
	}

	empty(): boolean {
		return this.q.isEmpty();
	}
}
