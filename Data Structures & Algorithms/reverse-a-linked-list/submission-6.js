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
        // need a result variable start at null
        // need a temp to store the temporary variabel start at hea
        // create a loop while
        // create a next variable to store the next variable
        // set the temp to the result, the set the result to the temp and set the temp to the next
        // return result
        let result = null
        let temp = head
        while (temp) {
            let next = temp.next;
            temp.next = result;
            result = temp;
            temp = next
        }

        return result
    }
}
