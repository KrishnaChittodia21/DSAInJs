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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (!node) return null
    if (node.val === val) return node
    const left = dfs(node.left)
    const right = dfs(node.right)
    return left || right
  }
  return dfs(root)
}

const searchBSTBetter = (root, val) => {
  let node = root
  while (node) {
    if (node.val === val) return node
    if (node.val < val) node = node.right
    if (node.val > val) node = node.left
  }
  return null
}
