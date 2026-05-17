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
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    deleteNodes(head, m, n) {
        // convert the linked list into array
        // start the array from position 0, jump to position 0 + m
        // slice from position m to m+n, 
        let arr = [];
        while (head) {
            arr.push(head.val)
            head = head.next
        }

        let l = 0;
        while (l < arr.length) {
            l += m;
            arr.splice(l, n);
        }
        
        // Convert array back to linked list
        let dummy = new ListNode(0);
        let curr = dummy;
        for (let val of arr) {
            curr.next = new ListNode(val);
            curr = curr.next;
        }
        return dummy.next;
    }
}