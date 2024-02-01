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
 * @return {number}
 */

var findTilt = function (root) {
  let sum = 0
  const dfs = (root) => {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    sum += Math.abs(left - right)
    return left + right + root.val
  }
  dfs(root)
  return sum
}
