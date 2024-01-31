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
var findMode = function (root) {
  if (!root) return []
  const map = new Map()
  const dfs = (root) => {
    if (!root) return
    map.set(root.val, (map.get(root.val) || 0) + 1)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  const max = Math.max(...map.values())
  return [...map.entries()]
    .filter(([key, val]) => val === max)
    .map(([key, val]) => key)
}

const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
}

const root2 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
}

console.log(findMode(root2))
