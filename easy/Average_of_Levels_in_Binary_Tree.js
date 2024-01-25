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

var averageOfLevels = function (root) {
  const stk = [root]
  const avg = []
  while (stk.length) {
    const stkSize = stk.length
    let sum = 0
    for (let i = 0; i < stkSize; i++) {
      const node = stk.shift()
      sum += node.val
      if (node.left) stk.push(node.left)
      if (node.right) stk.push(node.right)
    }
    avg.push(sum / stkSize)
  }
  return avg
}

const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
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

const root2 = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 20,
    left: null,
    right: null,
  },
}

console.log(averageOfLevels(root))
