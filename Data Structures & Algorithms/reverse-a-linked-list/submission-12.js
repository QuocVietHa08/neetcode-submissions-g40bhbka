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
     * @return {ListNode}
     */
    reverseList(head) {
        // current node
        // prev node 
        // next node
        // 0 1 2 3
        // c n
        // p = null c.next = p, c = next, next = next.next
        let currNode = head
        let prevNode = null
        while (currNode) {
            let nextNode = currNode.next;
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        }

        return prevNode
    }
}
