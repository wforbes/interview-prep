/**
 * Number of Students Unable to Eat Lunch
 * Time: O(n²), Space: O(n)
 *
 * Simulates queue behavior until no more matches possible
 */

// Simple Queue implementation
class Queue<T> {
	private items: T[];

	constructor(items?: T[]) {
		this.items = items || [];
	}

	static fromArray<T>(arr: T[]): Queue<T> {
		return new Queue<T>([...arr]);
	}

	enqueue(item: T): void {
		this.items.push(item);
	}

	dequeue(): T | undefined {
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

export function countStudents(students: number[], sandwiches: number[]): number {
	const qStu = Queue.fromArray(students);
	const qSan = Queue.fromArray(sandwiches);
	let sinceLastMatch = 0;

	while (sinceLastMatch < qStu.size()) {
		// Ran out of sandwiches
		if (qSan.isEmpty()) return qStu.size();

		// We have a match
		if (qStu.front() === qSan.front()) {
			qStu.dequeue();
			qSan.dequeue();
			sinceLastMatch = 0;
		} else {
			// No match, student goes to end of queue
			sinceLastMatch++;
			qStu.enqueue(qStu.dequeue()!);
		}
	}

	return qStu.size();
}
