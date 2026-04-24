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
     * @return {boolean}
     */
    isPalindrome(head) {
        // palindrome linked list is a linkedlist that the begin of it and the backward of it need to be
        // the same
        // 1 -> 2 -> 3 ->2 -> 1
        // create an array of value and use the 2 pointer
        // compare the value
        let result = []
        console.log(head, head.val)
        while (head) {
            result.push(head.val)
            head = head.next
        }
        let l = 0;
        let r = result.length-1;
        while (l < r) {
            console.log(l,)
            if (result[l] != result[r]) {
                return false
            } 
            l++;
            r--;
        }
        return true
    }
}
