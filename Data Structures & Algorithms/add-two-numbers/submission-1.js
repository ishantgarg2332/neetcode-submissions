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
        let ans = new ListNode();
        let curr = ans;

        let carry = 0;
        while(l1 || l2 || carry) {
            const op1 = l1 ? l1.val : 0;
            const op2 = l2 ? l2.val : 0;

            let val = op1 + op2 + carry;
            carry = Math.floor(val / 10);
            val = val % 10;

            curr.next = new ListNode(val);

            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return ans.next;
    }
}
