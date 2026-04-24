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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        // we have a linked list remove or filter all the item that has value = value
        // loop throught the list and filter item with that list
        // head.val == val -> head.next = head.next.next
        let dummy = new ListNode(0, head);
        let curr = dummy;
        while (curr.next) {
            if (curr.next.val != val) {
                curr = curr.next
            } else {
                curr.next = curr.next.next
            }
            
        }

        return dummy.next
    }
}
