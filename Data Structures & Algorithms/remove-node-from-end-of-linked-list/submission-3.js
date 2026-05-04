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
        // loop through linked list 
        // if the number in n position from the end 
        // head = head.next.next
        // we don't know where is the last value of the linked list to measure the 
        // remove the nth node from the end that mean remove the N - n + 1 from the start
        // calcuate the length of the node
        // if the number = n -> node.next = node.next.next
        let a = 0;
        let temp = head
        while (temp) {
            a++;
            temp = temp.next
        }
        let dummy = new ListNode(-1, head)
        let temp2 = dummy // list node val 1, next ln 2...
        let target = a - n; // 4 - 2 = 2
        let i = 0;
        while (temp2 && temp2.next) {
            if (i == target) {
                temp2.next = temp2.next.next
                break
            } else {
                temp2 = temp2.next
            }
            i++;
        }


        return dummy.next
    }
}

