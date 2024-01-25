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
const helper = (root, isLeft) => {
  if (!root) return 0
  if (!root.left && !root.right && isLeft) return root.val
  return helper(root.left, true) + helper(root.right, false)
}
var sumOfLeftLeaves = function (root) {
  return helper(root, false)
}

const sumOfLeftLeavesIterative = (root) => {
  const stk = [[root, false]]
  let sum = 0
  while (stk.length) {
    const [node, isLeft] = stk.shift()
    if (!node) continue
    if (isLeft && !node.left && !node.right) sum += node.val
    if (node.left) stk.push([node.left, true])
    if (node.right) stk.push([node.right, false])
  }
  return sum
}

const root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
      left: null,
      right: null,
    },
    left: {
      val: 4,
      right: null,
      left: null,
    },
  },
  right: {
    val: 3,
    right: null,
    left: null,
  },
}

console.log(sumOfLeftLeavesIterative(root))
