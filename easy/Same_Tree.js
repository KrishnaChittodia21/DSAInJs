/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const isSameTreeIterative = (p, q) => {
  const stack = [[p, q]]
  while (stack.length) {
    const [left, right] = stack.pop()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    stack.push([left.left, right.left])
    stack.push([left.right, right.right])
  }
  return true
}
