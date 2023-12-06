function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return left === 0 || right === 0
    ? left + right + 1
    : Math.min(left, right) + 1
}

const minDepthIterative = (root) => {
  if (!root) return 0
  const stk = [[root, 1]]
  while (stk.length) {
    const [root, depth] = stk.shift()
    if (!root.left && !root.right) return depth
    if (root.left) stk.push([root.left, depth + 1])
    if (root.right) stk.push([root.right, depth + 1])
  }
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
console.log(minDepthIterative(root))
