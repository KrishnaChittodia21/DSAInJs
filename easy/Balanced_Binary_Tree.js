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

const heightIterative = (node) => {
  const stk = [[node, 1]]
  let max = 0
  while (stk.length) {
    const [root, height] = stk.pop()
    if (!root) continue
    if (height > max) max = height
    if (root.left) stk.push([root.left, height + 1])
    if (root.right) stk.push([root.right, height + 1])
  }
  return max
}

const isBalancedBinaryTreeIterative = (root) => {
  if (!root) return true
  const stk = [root]
  while (stk.length) {
    const root = stk.pop()
    if (!root) continue
    if (Math.abs(heightIterative(root.left) - heightIterative(root.right)) > 1)
      return false
    if (root.left) stk.push(root.left)
    if (root.right) stk.push(root.right)
  }
  return true
}

console.log(isBalancedBinaryTreeIterative([3, 9, 20, null, null, 15, 7]))
