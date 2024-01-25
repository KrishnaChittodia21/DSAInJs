function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var minDiffInBST = function (root) {
//   const arr = []
//   const dfs = (node) => {
//     if (!node) return
//     dfs(node.left)
//     arr.push(node.val)
//     dfs(node.right)
//   }
//   dfs(root)
//   let min = Infinity
//   for (let i = 1; i < arr.length; i++) {
//     min = Math.min(min, arr[i] - arr[i - 1])
//   }
//   return min
// }

// const helper = (root, arr) => {
//   if (!root) return
//   helper(root.left, arr)
//   arr.push(root.val)
//   helper(root.right, arr)
// }

// var minDiffInBST = function (root) {
//   const arr = []
//   helper(root, arr)
//   let min = Infinity
//   for (let i = 1; i < arr.length; i++) {
//     min = Math.min(min, Math.abs(arr[i] - arr[i - 1]))
//   }
//   return min
// }

const minDiffInBSTIterative = (root) => {
  const stack = []
  const arr = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    arr.push(root.val)
    root = root.right
  }
  console.log(arr)
  let min = Infinity
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i - 1]))
  }
  return min
}

const root3 = {
  val: 99,
  left: {
    val: 84,
    left: {
      val: 27,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 53,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: null,
}

const root2 = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
}

const root = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 48,
    left: {
      val: 12,
      left: null,
      right: null,
    },
    right: {
      val: 49,
      left: null,
      right: null,
    },
  },
}

console.log(minDiffInBSTIterative(root3))
