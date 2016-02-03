
// Definition for a binary tree node.
 //  function TreeNode(val) {
 //     this.val = val;
 //     this.left = this.right = null;
 // }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, x) {
    x = x || 0;
    if(!root) {
        return x;
    }
    x++;
    var left = maxDepth(root.left, x);
    var right = maxDepth(root.right, x);
    if(left > right) {
      return left;
    } else {
      return right;
    }
};
