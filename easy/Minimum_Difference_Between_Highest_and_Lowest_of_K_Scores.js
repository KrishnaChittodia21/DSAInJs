/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length <= 1) return 0
  nums.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (res === 0 && nums[i + k - 1] - nums[i] > 0) {
      res = nums[i + k - 1] - nums[i]
      continue
    }
    if (nums[i + k - 1] - nums[i] < res) {
      res = nums[i + k - 1] - nums[i]
    }
  }
  return res
}
