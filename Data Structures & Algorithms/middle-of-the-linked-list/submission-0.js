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
    middleNode(head) {
        // convert to array and create new array from that.
        let arr = [];
        let temp = head;
        while (temp) {
            arr.push(temp.val);
            temp = temp.next
        }

        console.log(arr)
        let dummy = new ListNode(-1)
        let temp2 = dummy;
        let begin = Math.floor(arr.length/2);
        console.log(begin)
        for (let i = begin; i < arr.length; i++) {
            temp2.next = new ListNode(arr[i])
            temp2 = temp2.next
        }
        return dummy.next
    }
}
