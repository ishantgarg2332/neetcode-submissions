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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const stack = [];
        let tail = head;

        while(tail) {
            stack.push(tail);
            tail = tail.next;
        }

        const idx = stack.length - n;

        if(idx === 0) return head.next;

        stack[idx - 1].next = stack[idx].next;

        return head;
    }
}
