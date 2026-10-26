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
    isSubtree(root, subRoot) { 
        function sameTree(p,q){
            if(!p && !q) return true

            if((p && !q )|| (!q && p)){
                return false
            }
            if(p?.val !==q?.val){
                return false
            }
return sameTree(p.left,q.left) &&           sameTree(p.right,q.right)
        }

        function hasTree(root){
            if(!root) return false
             if(sameTree(root,subRoot)){
                  return true
             }
             return hasTree(root.left)||hasTree(root.right)

        }
       return hasTree(root)
    }
}
