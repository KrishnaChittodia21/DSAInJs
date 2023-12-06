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
 * @return {boolean}
 */

const height = (node) => {
  if (!node) return 0
  const left = 1 + height(node.left)
  const right = 1 + height(node.right)
  return Math.max(left, right)
}
var isBalanced = function (root) {
  if (!root) return true
  const left = isBalanced(root.left)
  const right = isBalanced(root.right)
  return Math.abs(height(root.left) - height(root.right)) <= 1 && left && right
}
