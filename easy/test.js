/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        xor = Math.max(xor, nums[i] ^ nums[j])
      }
    }
  }
  return xor
}

// console.log(maximumStrongPairXor([1, 2, 3, 4, 5]))
// console.log(maximumStrongPairXor([10, 100]))
// console.log(maximumStrongPairXor([5, 6, 25, 30]))
console.log(maximumStrongPairXor([1, 5, 4, 1, 7]))
