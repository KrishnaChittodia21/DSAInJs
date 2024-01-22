/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res |= nums[i]
  }
  return res * (1 << (nums.length - 1))
}

console.log(subsetXORSum([1, 3]))
console.log(subsetXORSum([5, 1, 6]))
