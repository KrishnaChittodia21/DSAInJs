/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorderIterative = function (root) {
  if (!root) return []
  const stk = [root]
  const res = []
  while (stk.length) {
    if (!node) continue
    for (let i = node.children.length - 1; i >= 0; i--) {
      stk.push(node.children[i])
    }
    res.push(node.val)
  }
  return res
}
