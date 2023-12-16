/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = [...new Set(nums)].sort((a, b) => a - b)
  const res = []
  let prev = 1
  for (let i = 0; i < nums.length; i++) {
    if (prev === arr[i]) {
      prev++
      continue
    }
    if (!arr.includes(prev)) [res.push(prev)]
    prev++
  }
  return res
}

console.log(findDisappearedNumbers([1, 1]))
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
