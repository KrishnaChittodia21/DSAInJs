/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const getNextGreaterElementArray = (nums) => {
  const nge = []
  const stk = []
  nge.unshift(-1)
  stk.push(nums[nums.length - 1])
  for (let i = nums.length - 2; i >= 0; i--) {
    const num = nums[i]
    while (stk.length && stk[stk.length - 1] < num) {
      stk.pop()
    }
    if (!stk.length) {
      nge.unshift(-1)
    } else {
      nge.unshift(stk[stk.length - 1])
    }
    stk.push(num)
  }
  return nge
}
var nextGreaterElement = function (nums1, nums2) {
  const nge = getNextGreaterElementArray(nums2)
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    res.push(nge[index])
  }
  return res
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))
