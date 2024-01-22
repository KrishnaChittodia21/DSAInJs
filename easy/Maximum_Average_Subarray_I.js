/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0)
  let maxSum = sum
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum / k
}
