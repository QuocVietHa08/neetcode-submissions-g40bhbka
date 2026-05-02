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
        let dummy = new ListNode(-1)
        let currNode = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                currNode.next = list1;
                list1 = list1.next
            } else {
                currNode.next = list2
                list2 = list2.next
            }
            currNode = currNode.next
        }

        currNode.next = list1 === null ? list2 : list1
        return dummy.next
    }
}
