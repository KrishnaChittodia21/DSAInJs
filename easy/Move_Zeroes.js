/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0
  let j = 0
  while (j < nums.length) {
    if (nums[j] !== 0) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      i++
    }
    j++
  }
  return nums
}
console.log(moveZeroes([1, 0, 1]))
