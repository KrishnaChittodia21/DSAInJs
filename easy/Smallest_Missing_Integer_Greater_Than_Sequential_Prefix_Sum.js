/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let e = 1
  let sum = nums[0]
  while (nums[e] === nums[e - 1] + 1) {
    sum += nums[e - 1]
    e++
  }
  while (nums.includes(sum)) {
    sum++
  }
  return sum
}
