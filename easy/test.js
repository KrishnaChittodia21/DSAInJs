/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let ans = 0
  let i = 0
  let last = Number.MAX_SAFE_INTEGER

  while (i < nums.length) {
    if (nums[i] > threshold || (i > 0 && nums[i] % 2 === nums[i - 1] % 2)) {
      ans = Math.max(ans, i - last)
      last = Number.MAX_SAFE_INTEGER
    }

    if (
      last === Number.MAX_SAFE_INTEGER &&
      nums[i] <= threshold &&
      nums[i] % 2 === 0
    ) {
      last = i
    }

    i++
  }

  ans = Math.max(ans, i - last)
  return ans
}
