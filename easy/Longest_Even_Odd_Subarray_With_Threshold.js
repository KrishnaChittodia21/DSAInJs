/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let maxLength = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      i++
      let count = 1
      while (i < nums.length) {
        if (nums[i - 1] % 2 !== nums[i] % 2) {
          count++
        }
        if (count > maxLength) {
          maxLength = count
        }
        i++
      }
    }
  }
  return maxLength
}

console.log(longestAlternatingSubarray([2, 3, 4, 5], 4))
console.log(longestAlternatingSubarray([2, 3, 5, 4], 5))
