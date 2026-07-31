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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    sameTree(root1, root2) {
        if(!root1 && !root2) return true;
        if(!root1 || !root2) return false;

        if(root1.val === root2.val) {
            return this.sameTree(root1.left, root2.left) && this.sameTree(root1.right, root2.right);
        }

        return false;
    }

    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root) return false;

        if(this.sameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
