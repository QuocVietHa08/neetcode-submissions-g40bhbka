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
    maxPathSum(root) {
        const res = [root.val];
        this.dfs(root, res);
        return res[0]
    }
    dfs(node, res) {
        if (node === null) return 0;

        const leftMax = this.dfs(node.left, res);
        const rightMax = this.dfs(node.right, res);

        const leftContribution = Math.max(leftMax, 0);
        const rightContribution = Math.max(rightMax, 0);

        res[0] = Math.max(res[0], node.val + leftContribution + rightContribution);
        return node.val + Math.max(leftContribution, rightContribution)
    }
}
