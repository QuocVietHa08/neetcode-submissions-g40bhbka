/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     } inner comments can go here
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode} 
     */
    reverseList(head) {
        // preview node, current node, next node
        // 0 1 2 3
        // p c n
        // c.next = p
        // p = c
        // c = n
        // n = n.next
        let curNode = head
        let prevNode = null
        while (curNode) {
            let nextNode = curNode.next
            curNode.next = prevNode
            prevNode = curNode
            curNode = nextNode

        } 

        return prevNode
    }
}

