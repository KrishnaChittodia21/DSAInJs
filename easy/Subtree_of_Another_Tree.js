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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

var isSubtree = function (root, subRoot) {
  if (!root) return false
  if (isSameTree(root, subRoot)) return true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

const isSubtreeIterative = (root, subRoot) => {
  if (!root) return false
  const stk = [root]
  while (stk.length) {
    const root = stk.pop()
    if (isSameTree(root, subRoot)) return true
    if (root.right) stk.push(root.right)
    if (root.left) stk.push(root.left)
  }
  return false
}
