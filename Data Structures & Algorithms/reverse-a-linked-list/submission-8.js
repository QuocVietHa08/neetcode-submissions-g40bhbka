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
        if (!head) return null;
        let arr = [];
        while (head) {
            arr.push(head.val)
            head = head.next
        }
        arr.reverse()
        let result = new ListNode(arr[0])
        let current = result
        for (let i = 1; i < arr.length;i++) {
            current.next = new ListNode(arr[i])
            current = current.next
        }
        return result

    }
}
