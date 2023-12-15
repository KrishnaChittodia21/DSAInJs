/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0
  let j = 1
  let count = 0
  const arr = []
  while (j < nums.length) {
    if (nums[j] - nums[j - 1] !== 1) {
      if (count === 0) {
        arr.push(`${nums[i]}`)
      } else {
        arr.push(`${nums[i]}->${nums[j - 1]}`)
      }
      count = 0
      i = j
    }
    count++
    j++
  }
  return arr
}

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
