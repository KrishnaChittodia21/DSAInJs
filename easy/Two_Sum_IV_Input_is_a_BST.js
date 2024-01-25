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
 * @param {number} k
 * @return {boolean}
 */

const helper = (root, arr) => {
  if (!root) return
  helper(root.left, arr)
  arr.push(root.val)
  helper(root.right, arr)
}

var findTarget = function (root, k) {
  const arr = []
  helper(root, arr)
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] + arr[j] === k) {
      return true
    }
    if (arr[i] + arr[j] > k) {
      j--
    }
    if (arr[i] + arr[j] < k) {
      i++
    }
  }
  return false
}

const root = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}

console.log(findTarget(root, 4))
