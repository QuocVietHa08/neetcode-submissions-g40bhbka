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
        // there will be 3 think: currNode, prevNode and nextNode
        // the key is prevNodo will start at null, currNode will point to prevNode
        // then prevNode = currNode and currNode = nextNode
        let prevNode = null;
        let currNode = head;
        while (currNode) {
            let nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode
        }

        return prevNode
    }
}
