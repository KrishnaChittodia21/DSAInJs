/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let res = null
  let prev = null
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    if (!prev) res = node
    else {
      prev.right = node
      node.left = null
    }
    prev = node
    dfs(node.right)
  }
  dfs(root)
  return res
}
