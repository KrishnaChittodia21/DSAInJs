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

var invertTree = function (root) {
  if (!root) return
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}

const invertTreeIterative = (root) => {
  const stk = [root]
  while (stk.length) {
    const node = stk.pop()
    if (!node) continue
    if (node.left) stk.push(node.left)
    if (node.right) stk.push(node.right)
    const temp = node.left
    node.left = node.right
    node.right = temp
  }
  return root
}

const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      right: null,
      left: null,
    },
  },
}

console.log(invertTreeIterative(root))