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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) return targetSum === root.val
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

const helper = (root, target, sum) => {
  if (!root) return false
  if (!root.left && !root.right) return target === sum + root.val
  return (
    helper(root.left, target, sum + root.val) ||
    helper(root.right, target, sum + root.val)
  )
}
var hasPathSum2 = function (root, targetSum) {
  if (!root) return false
  return helper(root, targetSum, 0)
}
