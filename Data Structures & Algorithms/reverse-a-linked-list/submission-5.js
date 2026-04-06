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
        // declare a result linkedlist start with null
        // declare a temp var start at temp
        // create looo
        let result = null;
        let temp = head;

        while (temp) {
            let next = temp.next;
            temp.next = result;
            result = temp;
            temp = next;
        }

        return result
    }
}
