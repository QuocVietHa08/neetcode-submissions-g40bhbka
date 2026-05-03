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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // convert array
        // remove the item at position arr.length -2
        // create new now base on that
        let arr = []
        let currNode = head
        while (currNode) {
            arr.push(currNode.val)
            currNode = currNode.next
        }
        arr.splice((arr.length-n),1)
        console.log(arr)
        let dummy = new ListNode(-1);
        let curr = dummy;
        for (let i = 0; i < arr.length;i++) {
            curr.next = new ListNode(arr[i])
            curr = curr.next
        }
        return dummy.next
    }
}
