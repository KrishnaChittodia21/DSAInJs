/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  if (!original) return null
  if (original === target) return cloned
  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  )
}

const getTargetCopyIterative = (original, cloned, target) => {
  const stk = [[original, cloned]]
  while (stk.length > 0) {
    const [original, cloned] = stk.pop()
    if (original === target) return cloned
    if (original.left) stk.push([original.left, cloned.left])
    if (original.right) stk.push([original.right, cloned.right])
  }
}

console.log(getTargetCopy(original, cloned, target))
