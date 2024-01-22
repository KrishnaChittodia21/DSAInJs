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

var hasPathSumIterative = function (root, targetSum) {
  const stk = [[root, targetSum]]
  while (stk.length) {
    const [node, sum] = stk.pop()
    if (!node) continue
    if (!node.left && !node.right && sum - node.val === 0) return true
    if (node.left) stk.push([node.left, sum - node.val])
    if (node.right) stk.push([node.right, sum - node.val])
  }
  return false
}
