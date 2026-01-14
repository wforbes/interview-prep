/**
 * Min Stack
 * https://leetcode.com/problems/min-stack/
 * Time: O(1) for all operations, Space: O(n)
 *
 * Stores differences from minimum to achieve O(1) getMin
 */
export class MinStack {
	stack: number[];
	min: number;

	constructor() {
		this.stack = [];
		this.min = Infinity;
	}

	push(val: number): void {
		if (this.stack.length === 0) {
			this.stack.push(0);
			this.min = val;
		} else {
			const diff = val - this.min;
			this.stack.push(diff);
			if (val < this.min) this.min = val;
		}
	}

	pop(): void {
		if (this.stack.length === 0) return;
		const pop = this.stack.pop()!;

		// If pop is negative, it was the minimum
		// Restore previous minimum
		if (pop < 0) this.min -= pop;
	}

	top(): number {
		const top = this.stack[this.stack.length - 1];
		// If top is negative, actual value is the min
		return top > 0 ? top + this.min : this.min;
	}

	getMin(): number {
		return this.min;
	}
}
