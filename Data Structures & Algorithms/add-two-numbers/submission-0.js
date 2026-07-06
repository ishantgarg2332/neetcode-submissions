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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sol = new ListNode();
        let curr = sol;
        let carry = 0;
        while (l1 || l2 || carry) {
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;
            
            let val = val1 + val2 + carry;
            carry = Math.floor(val / 10);
            val = val % 10;
            curr.next = new ListNode(val);

            curr = curr.next;
            l1 = l1?.next || null;
            l2 = l2?.next || null;
        }
        return sol.next;
    }
}
