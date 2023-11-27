function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  const left = inorderTraversal(root.left)
  const right = inorderTraversal(root.right)
  return [...left, root.val, ...right]
}

const inorderTraversalIterative = (root) => {
  const stack = []
  const result = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, null), new TreeNode(4, null)),
  new TreeNode(5, new TreeNode(6, null), new TreeNode(7, new TreeNode(8, null)))
)
console.log(inorderTraversal(root))
