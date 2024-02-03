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

const findSecondMinimumValueIterative = (root) => {
  const stk = [root]
  const arr = []
  while (stk.length) {
    const node = stk.shift()
    if (!node) continue
    arr.push(node.val)
    if (node.left) stk.push(node.left)
    if (node.right) stk.push(node.right)
  }
  const newArr = [...new Set(arr)].sort((a, b) => a - b)
  return newArr.length > 1 ? newArr[1] : -1
}

// root = [2, 2, 5, null, null, 5, 7]
const root = {
  val: 2,
  left: {
    val: 2,
    right: null,
    left: null,
  },
  right: {
    val: 5,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}

console.log(findSecondMinimumValueIterative(root))
