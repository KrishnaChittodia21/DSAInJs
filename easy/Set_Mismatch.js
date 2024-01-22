/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b)
  let map = {}
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i && !map[i]) map[i] = 0
    if (map[nums[i - 1]]) map[nums[i - 1]] = 2
    if (!map[nums[i - 1]]) map[nums[i - 1]] = 1
  }
  const res = []
  for (const key in map) {
    if (map[key] === 0) {
      res[1] = key
    }
    if (map[key] === 2) {
      res[0] = key
    }
  }
  return res
}
console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
console.log(findErrorNums([3, 2, 2]))
console.log(findErrorNums([3, 2, 3, 4, 6, 5]))
