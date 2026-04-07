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
        // has temporary node
        // has result node start will null
        // create a loop when the temp has value
        // create next node
        // set result.next = temp
        let temp = head;
        let result = null

        while (temp) {
            let next = temp.next;
            temp.next = result;
            result = temp
            temp = next
        }

        return result
    }
}
