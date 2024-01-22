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

const isSymmetricHelper = (left, right) => {
  if (!left && !right) return true
  if (!left || !right) return false
  if (left.val !== right.val) return false
  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(left.right, right.left)
  )
}
var isSymmetric = function (root) {
  if (!root) return true
  return isSymmetricHelper(root.left, root.right)
}

const isSymmetricIterative = (root) => {
  if (!root) return true
  const stack = [[root.left, root.right]]
  while (stack.length) {
    const [left, right] = stack.pop()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    stack.push([left.left, right.right])
    stack.push([left.right, right.left])
  }
  return true
}
