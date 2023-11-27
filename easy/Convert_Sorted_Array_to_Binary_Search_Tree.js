function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  const midIndex = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[midIndex])
  root.left = sortedArrayToBST(nums.slice(0, midIndex))
  root.right = sortedArrayToBST(nums.slice(midIndex + 1))
  return root
}

const sortedArrayToBSTIterative = (nums) => {
  const stack = []
  const root = new TreeNode()
  stack.push([root, 0, nums.length - 1])
  while (stack.length) {
    const [node, left, right] = stack.pop()
    if (left > right) continue
    const mid = Math.floor((left + right) / 2)
    node.val = nums[mid]
    if (left < mid) {
      node.left = new TreeNode()
      stack.push([node.left, left, mid - 1])
    }
    if (right > mid) {
      node.right = new TreeNode()
      stack.push([node.right, mid + 1, right])
    }
  }
  return root
}

const nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBSTIterative(nums))
