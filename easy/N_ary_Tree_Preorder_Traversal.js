/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorderRecursive = function (root) {
  if (!root) return []
  const result = [root.val]
  for (let child of root.children) {
    result.push(...preorderRecursive(child))
  }
  return result
}

const preorderIterative = (root) => {
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

// root = [1,null,3,2,4,null,5,6]
const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [],
        },
        {
          val: 6,
          children: [],
        },
      ],
    },
    {
      val: 2,
      children: [],
    },
    {
      val: 4,
      children: [],
    },
  ],
}

console.log(preorderIterative(root))
