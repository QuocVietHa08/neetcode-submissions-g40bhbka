/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        // we use queue
        // firrst push the root into the queue
        // then when the queue is not empty
        // we swap the childrent 
        // then we add the childrent to the queue and continue the proccess until it done
        if (root == null) return null
        let queue = new Queue([root])
        while (!queue.isEmpty()) {
            let node = queue.pop();
            [node.left, node.right] = [node.right, node.left]
            if (node.left != null) queue.push(node.left)
            if (node.right != null) queue.push(node.right)
        }

        return root
    }
}
