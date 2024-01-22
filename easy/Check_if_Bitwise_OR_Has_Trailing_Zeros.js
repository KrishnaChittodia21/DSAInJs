/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const num = (nums[i] | nums[j]).toString(2)
      if (num.charAt(num.length - 1) === '0') return true
    }
  }
  return false
}

console.log(hasTrailingZeros([1, 2, 3, 4, 5]))
console.log(hasTrailingZeros([1, 3, 5, 7, 9]))
