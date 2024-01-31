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
const height = (root) => {
  if (!root) return 0
  return 1 + Math.max(height(root.left), height(root.right))
}
var diameterOfBinaryTree = function (root) {
  if (!root) return 0
  const left = height(root.left)
  const right = height(root.right)
  return Math.max(
    left + right,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  )
}

const diameterOfBinaryTreeDFS = (root) => {
  let max = 0
  const dfs = (root) => {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    max = Math.max(max, left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)
  return max
}

const diameterOfBinaryTreeIterative = (root) => {
  if (!root) return 0
  const stk = [[root, 0]]
  let max = 0
  while (stk.length) {
    const [root, diameter] = stk.pop()
    if (!root) continue
    max = Math.max(max, height(node.left) + height(node.right))
    if (root.left) stk.push([root.left, diameter + 1])
    if (root.right) stk.push([root.right, diameter + 1])
  }
  return max
}
