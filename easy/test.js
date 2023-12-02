/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] = map[nums[i]] + 1
    } else {
      map[nums[i]] = 1
    }
  }
  let max = 0
  for (const key in map) {
    if (max < map[key]) {
      max = map[key]
    }
  }
  return max
}

console.log(majorityElement([3, 2, 3]))
