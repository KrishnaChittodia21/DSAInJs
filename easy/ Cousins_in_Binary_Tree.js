function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

const findDepthAndParent = (root, target, depth, parent) => {
  if (!root) return null
  if (root.val === target) return { depth, parent }

  const left = findDepthAndParent(root.left, target, depth + 1, root)
  const right = findDepthAndParent(root.right, target, depth + 1, root)

  return left || right
}

var isCousins = function (root, x, y) {
  const xDepthAndParent = findDepthAndParent(root, x, 0, null)
  const yDepthAndParent = findDepthAndParent(root, y, 0, null)

  return (
    xDepthAndParent?.depth === yDepthAndParent?.depth &&
    xDepthAndParent?.parent !== yDepthAndParent?.parent
  )
}

const isCousinsIterative = (root, x, y) => {
  let xData = null
  let yData = null
  const stk = [{ node: root, parent: null, depth: 0 }]
  while (stk.length) {
    const { node, parent, depth } = stk.pop()
    if (node.val === x) xData = { parent, depth }
    if (node.val === y) yData = { parent, depth }
    if (node.left) stk.push({ node: node.left, parent: node, depth: depth + 1 })
    if (node.right)
      stk.push({ node: node.right, parent: node, depth: depth + 1 })
    if (xData && yData) break
  }
  return xData.depth === yData.depth && xData.parent !== yData.parent
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: { val: 5, left: null, right: null },
  },
}

const x = 4
const y = 5

// const result = isCousins(root, x, y)
const result = isCousinsIterative(root, x, y)
console.log(result) // Output: true
