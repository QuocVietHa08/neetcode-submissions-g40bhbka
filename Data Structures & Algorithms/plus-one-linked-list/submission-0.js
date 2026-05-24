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
    plusOne(head) {
        // Using recursion to handle carry-over from right to left
        const add = (node) => {
            if (!node) return 1;
            let carry = add(node.next);
            let sum = node.val + carry;
            node.val = sum % 10;
            return Math.floor(sum / 10);
        };

        let carry = add(head);
        if (carry > 0) {
            return new ListNode(carry, head);
        }
        return head;
    }
}