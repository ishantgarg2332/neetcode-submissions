// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let tail = head;
        let map = new Map();
        map.set(null, null);

        while(tail) {
            map.set(tail, new Node(tail.val));
            tail = tail.next;
        }

        tail = head;
        while(tail) {
            let copy = map.get(tail);
            copy.next = map.get(tail.next);
            copy.random = map.get(tail.random);
            tail = tail.next;
        }

        return map.get(head);
    }
}
