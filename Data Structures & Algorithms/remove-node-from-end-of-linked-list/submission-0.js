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
        let count = 0;
        let start = head;
        while (start) {
            count ++;
            start = start.next;
        }
        const removeIndex = count - n;
        if(removeIndex === 0) return head.next;

        let curr = head;
        for(let i = 0; i < count - 1; ++i) {
            if(i + 1 === removeIndex) {
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
        return head;
    }
}
