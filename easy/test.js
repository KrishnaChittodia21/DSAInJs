function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var isBalanced = function (root) {
  if (!root) return 0
  const left = 1 + isBalanced(root.left)
  const right = 1 + isBalanced(root.right)
  return Math.abs(left - right) <= 1
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
// [1,2,2,3,3,null,null,4,4]
const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(3), new TreeNode(4))
)
console.log(isBalanced(root2))
