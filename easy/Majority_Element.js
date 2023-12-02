/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0
  let candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }
  return candidate
}

const majorityElementAnotherApproach = (nums) => {
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
      max = map[key] > nums.length / 2 ? key : max
    }
  }
  return max
}

console.log(majorityElementAnotherApproach([3, 2, 3]))
