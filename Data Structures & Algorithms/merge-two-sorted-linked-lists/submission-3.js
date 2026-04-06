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
        // declare a dummy linked list with value = 0
        // node = dummy -->
        // if there are 2 linked list -> these linked list already sort
        // if the lis1.val < list2.val -> node.next = list and list1 = list1.next
        // else node.next = list2 and list2 = list2.next
        // node = node.next --> move to the nextnode
        // if the list1 is longer (or list2 is longer) -> then set the node.next = list1 or list2
        // return dummy.next, why return dummy not node, because node follow the value of linked list
        // return the node will give you the tail not the full merged list

        let dummy = { val: 0, next: null};
        let node = dummy;
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

        if (list1) {
            node.next = list1
        } else {
            node.next = list2
        }

        return dummy.next
    }
}
