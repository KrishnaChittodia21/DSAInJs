/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums.length || nums.length === 1) return nums
  let i = 0
  let j = 0
  while (i < nums.length) {
    if (nums[j] === 0 && nums[i] !== nums[j]) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
    i++
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
