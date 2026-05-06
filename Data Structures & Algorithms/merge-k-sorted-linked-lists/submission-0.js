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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // merge all the linked list in a list to return 1 linkedlist
        // create an array of combine all the list then create alinkedi list based on that
        if (lists.length === 0) return null
        let arr = []
        for (let i = 0; i < lists.length;i++) {
            let a = [];
            while(lists[i]) {
                a.push(lists[i].val)
                lists[i] = lists[i].next
            }
            arr.push(...a)
        }
        arr.sort((a, b) => a -b )
        let dummy = new ListNode(arr[0])
        let head = dummy
        for (let i = 1; i < arr.length;i++) {
            head.next = new ListNode(arr[i])
            head = head.next
        }
        return dummy
    }
}
