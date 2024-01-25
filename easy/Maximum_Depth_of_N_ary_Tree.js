/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) return 0
  let max = 0
  for (const child of root.children) {
    max = Math.max(max, maxDepth(child))
  }
  return max + 1
}

const maxDepthIterative = (root) => {
  if (!root) return 0
  const stk = [root]
  let depth = 0
  while (stk.length) {
    const size = stk.length
    for (let i = 0; i < size; i++) {
      const node = stk.shift()
      stk.push(...node.children)
    }
    depth++
  }
  return depth
}
