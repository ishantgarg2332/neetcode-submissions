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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head, fast = head;
        let count = 0;

        while(slow && fast) {
            slow = slow?.next;
            fast = fast?.next?.next;
            count++;
            if(slow === fast) return true;
        }

        return false;
    }
}
