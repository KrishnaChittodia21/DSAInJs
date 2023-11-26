/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const uniq = [...new Set(nums)]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniq[i]
  }
  return uniq.length
}
