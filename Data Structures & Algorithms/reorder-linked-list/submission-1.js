/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const stack = [];
        let tail = head;
        while(tail) {
            stack.push(tail);
            tail = tail.next;
        }

    const dummy = new ListNode();
    let pointer = dummy;
    let count = stack.length;

    while (count > 0) {
        const front = head;
        head = head.next;
        pointer.next = front;
        pointer = front;
        if (--count === 0) break;

        const back = stack.pop();
        pointer.next = back;
        pointer = back;
        --count;
    }

    pointer.next = null; 
    return dummy.next;
    }
}
