/**
 * Merge Two Sorted Lists - Alternative with Early Returns
 * Time: O(m+n), Space: O(1)
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	const head = new ListNode();
	let curr: ListNode | null = head;

	if (!list1) return list2;
	if (!list2) return list1;

	while (list1 || list2) {
		if (list1 && list2 && list1.val <= list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else if (list2) {
			curr.next = list2;
			list2 = list2.next;
		}
		curr = curr.next!;

		if (!list1) {
			curr.next = list2;
			break;
		}

		if (!list2) {
			curr.next = list1;
			break;
		}
	}

	return head.next;
}
