/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let min = Number.MAX_SAFE_INTEGER
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] > nums[k]) {
          flag = true
          min = Math.min(nums[i] + nums[j] + nums[k], min)
        }
      }
    }
  }
  return flag ? min : -1
}

console.log(minimumSum([8, 6, 1, 5, 3]))
console.log(minimumSum([5, 4, 8, 7, 10, 2]))
