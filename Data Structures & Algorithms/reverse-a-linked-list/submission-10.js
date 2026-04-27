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
        // we should have a temp variable 
        // loop throught array 
        // temp = head
        // head.next = temp.next
        // create an array base on current linkedin 
        // revert array
        // create new array base on the new linked list
        let prev = null;
        let curr = head;

        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        return prev
    }
}
