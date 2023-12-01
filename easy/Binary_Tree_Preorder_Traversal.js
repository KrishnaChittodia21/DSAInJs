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
var preorderTraversal = function (root) {
  if (!root) return []
  const left = preorderTraversal(root.left)
  const right = preorderTraversal(root.right)
  return [root.val, ...left, ...right]
}

const preorderTraversalIterative = (root) => {
  const stack = [root]
  const result = []
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    result.push(node.val)
    stack.push(node.right)
    stack.push(node.left)
  }
  return resultc
}
