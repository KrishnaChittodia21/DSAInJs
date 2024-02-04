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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0
  const dfs = (node) => {
    if (!node) return
    sum += node.val >= low && node.val <= high ? node.val : 0
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return sum
}

const rangeSumBSTIterative = (root, low, high) => {
  let sum = 0
  const stk = [root]
  while (stk.length) {
    const node = stk.pop()
    if (!node) continue
    const curr = node.val >= low && node.val <= high ? node.val : 0
    sum += curr
    if (curr > low) stk.push(node.left)
    if (curr < high) stk.push(node.right)
  }
  return sum
}

const root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      right: null,
      left: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      right: null,
      left: null,
    },
  },
}

console.log(rangeSumBSTIterative(root, 7, 15))
