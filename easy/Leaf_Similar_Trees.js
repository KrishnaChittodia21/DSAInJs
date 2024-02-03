/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const res1 = []
  const res2 = []
  const dfs = (node, res) => {
    if (!node) return
    if (!node.left && !node.right) res.push(node.val)
    dfs(node.left, res)
    dfs(node.right, res)
  }

  dfs(root1, res1)
  dfs(root2, res2)
  if (res1.length !== res2.length) return false
  for (let i = 0; i < res1.length; i++) {
    if (res1[i] !== res2[i]) return false
  }
  return true
}
