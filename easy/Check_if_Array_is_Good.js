/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isGood = function (nums) {
  let n = Math.max(...nums)
  let freq_map = Array(n + 1).fill(0)
  for (let num of nums) {
    freq_map[num] += 1
  }
  if (freq_map[n] !== 2) {
    return false
  }
  for (let i = 1; i < n; i++) {
    if (freq_map[i] !== 1) {
      return false
    }
  }
  return true
}
