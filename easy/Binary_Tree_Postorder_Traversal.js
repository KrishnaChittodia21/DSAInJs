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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return []
  const left = postorderTraversal(root.right)
  const right = postorderTraversal(root.left)
  return [...right, ...left, root.val]
}

const postorderTraversalIterative = (root) => {
  const stack = []
  const result = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}

var postorderTraversalBetter = function (root) {
  if (!root) return []
  const stk = [root]
  const res = []
  while (stk.length) {
    const node = stk.pop()
    res.unshift(node.val)
    if (node.left) stk.push(node.left)
    if (node.right) stk.push(node.right)
  }

  return res
}
