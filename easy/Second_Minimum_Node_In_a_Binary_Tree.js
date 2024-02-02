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

var findSecondMinimumValue = function (root) {
  const arr = []
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  const newArr = [...new Set(arr)].sort((a, b) => a - b)
  return newArr.length > 1 ? newArr[1] : -1
}
