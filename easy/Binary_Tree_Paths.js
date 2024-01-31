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
 * @return {string[]}
 */

const binaryTreePathsRecursive = function (root) {
  if (!root) return []
  if (!root.left && !root.right) return [`${root.val}`]
  const left = binaryTreePathsRecursive(root.left)
  const right = binaryTreePathsRecursive(root.right)
  return [
    ...left.map((path) => `${root.val}->${path}`),
    ...right.map((path) => `${root.val}->${path}`),
  ]
}

var binaryTreePathsIterative = function (root) {
  if (!root) return ['']
  const stk = [[root, '']]
  const res = []
  while (stk.length) {
    const [node, path] = stk.pop()
    if (!node) continue
    if (!node.left && !node.right) res.push(`${path}${node.val}`)
    if (node.left) stk.push([node.left, `${path}${node.val}->`])
    if (node.right) stk.push([node.right, `${path}${node.val}->`])
  }
  return res
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}

console.log(binaryTreePathsRecursive(root))
