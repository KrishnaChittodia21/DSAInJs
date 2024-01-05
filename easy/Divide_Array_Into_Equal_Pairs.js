/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] = map[nums[i]] + 1
    } else {
      map[nums[i]] = 1
    }
  }
  for (const key in map) {
    if (map[key] % 2 !== 0) {
      return false
    }
  }
  return true
}

console.log(
  divideArray([
    18, 19, 5, 5, 18, 19, 5, 6, 12, 19, 13, 4, 16, 11, 4, 16, 10, 8, 12, 8, 2,
    1, 8, 17, 4, 18, 3, 5, 16, 2, 16, 12, 17, 16, 7, 16, 2, 17, 19, 9, 1, 20,
    17, 17, 4, 6,
  ])
)

console.log(divideArray([3, 2, 3, 2, 2, 2]))
