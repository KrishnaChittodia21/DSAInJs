/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = {}
  for (let num of nums) {
    if (!map[num]) map[num] = 1
  }
  const res = []
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) res.push(i)
  }
  return res
}
