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
        // currNode, prevNode, nextNode
        // create a prevNode
        // prevNode = currentNode
        let prevNode = null;
        let currentNode = head
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode

        }
        return prevNode
    }
}

