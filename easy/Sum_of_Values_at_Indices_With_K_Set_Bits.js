/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    let num = i
    let count = 0
    while (num) {
      count += num & 1
      num >>= 1
    }
    if (count === k) sum += nums[i]
  }
  return sum
}

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1))
