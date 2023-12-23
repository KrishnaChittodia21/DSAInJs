/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = nums.slice(0, k).reduce((a, b) => a + b, 0)
  for (let i = k; i < nums.length; i++) {
    maxSum = Math.max(maxSum, nums[i] + maxSum - nums[i - k])
  }
  return maxSum / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
