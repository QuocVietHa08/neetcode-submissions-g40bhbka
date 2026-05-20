/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node} head
     * @param {number} insertVal
     * @return {_Node}
     */
    insert(head, insertVal) {
        // convert to array then insert after a value has meet the condition
        // turn array to linkedli
        if (head === null) {
            let newNode = new _Node(insertVal, null);
            newNode.next = newNode;
            return newNode
        }

        let prev = head
        let curr = head.next
        let toInsert = false

        do {
            if (prev.val <= insertVal && insertVal <= curr.val) {
                toInsert = true
            } else if (prev.val > curr.val) {
                if (insertVal >= prev.val || insertVal <= curr.val) {
                    toInsert = true
                }
            }
            if (toInsert) {
                prev.next = new _Node(insertVal, curr);
                return head;
            }
            prev = curr;
            curr = curr.next

        } while (prev !== head);

        prev.next = new _Node(insertVal, curr);
        return head
    }
}
