/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let count = 0
  let num = 0
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    if (num === 0) {
      num = nums[i]
    } else if (Math.abs(num - nums[i]) === 1) {
      count++
      flag = true
    } else if (!flag) {
      num = nums[i]
    }
    console.log(i, num, nums[i], count, flag)
  }
  return count > 0 ? count + 1 : 0
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
