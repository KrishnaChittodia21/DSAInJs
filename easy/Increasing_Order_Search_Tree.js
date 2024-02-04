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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let res = null
  let prev = null
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    if (!prev) res = node
    else {
      prev.right = node
      node.left = null
    }
    prev = node
    dfs(node.right)
  }
  dfs(root)
  return res
}

const increasingBSTIterative = (root) => {
  let prev = null
  let res = null
  const stk = []
  while (root || stk.length) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    if (!res) {
      res = root
    } else {
      prev.right = root
      root.left = null
    }
    prev = root
    root = root.right
  }
  return res
}
