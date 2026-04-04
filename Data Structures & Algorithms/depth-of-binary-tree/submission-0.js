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
     * @return {number}
     */
    maxDepth(root) {
        // loop though each item in in each branch of the tree
        // find the depthest value of the tree
        if (root === null) return 0;
        return (
            1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        );
    }
}
