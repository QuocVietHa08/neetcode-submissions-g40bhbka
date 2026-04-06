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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // declare a dummy linked list with val = 0 and next = null
        // declare a node = dummy this will be the pointer that will point to the next variable
        // compare the value in the list1 and list 2, set the vlaue for the node
        // if the list1 or list2 still exist the node after the loop then we set the node.next = that list
        // return the dummy
        let dummy = { val: 0, next: null}
        let node = dummy
        while (list1 && list2) {
            if (list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next
            } else {
                node.next = list2;
                list2 = list2.next
            }
            node = node.next
           
        }

        if (list1) node.next = list1
        else node.next = list2

        return dummy.next
    }
}
