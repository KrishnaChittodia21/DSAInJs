/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var findIntersectionValues = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) return [0, 0]
  const res = []
  let count = 0
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      count++
    }
  }
  res.push(count)
  count = 0
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      count++
    }
  }
  res.push(count)
  return res
}

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]))
