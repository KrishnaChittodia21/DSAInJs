/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  const fi = nums[0]
  const nums2 = nums.slice(1)
  const si = Math.min(...nums2)
  nums2.splice(nums2.indexOf(si), 1)
  const ti = Math.min(...nums2)
  return fi + si + ti
}
