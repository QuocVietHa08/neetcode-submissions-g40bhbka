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
     * @return {number[]}
     */
    inorderTraversal(root) {
        if (!root) return []
        let arr = []
        this.inorder(root, arr)
        return arr
    }
    inorder(root, arr) {
        if (root.left) {
            this.inorder(root.left, arr)
        }
        arr.push(root.val)
        if (root.right) {
            this.inorder(root.right, arr)
        }
    }
}
