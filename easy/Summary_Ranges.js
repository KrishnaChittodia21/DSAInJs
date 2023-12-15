/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0
  let j = 1
  const arr = []
  while (j < nums.length) {
    if (nums[j] - nums[j - 1] !== 1) {
      arr.push(
        nums[i] === nums[j - 1] ? `${nums[i]}` : `${nums[i]}->${nums[j - 1]}`
      )
      i = j
    }
    j++
  }
  arr.push(
    nums[i] === nums[j - 1] ? `${nums[i]}` : `${nums[i]}->${nums[j - 1]}`
  )
  return arr
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
