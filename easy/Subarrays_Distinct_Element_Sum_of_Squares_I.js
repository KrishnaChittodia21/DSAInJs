/**
 * @param {number[]} nums
 * @return {number}
 */
const getSubsets = (arr) => {
  const subarrays = []
  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      const subarray = arr.slice(start, end + 1)
      subarrays.push(subarray)
    }
  }
  return subarrays
}

const getSquareSum = (arr) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const unique = [...new Set(arr[i])]
    count += unique.length ** 2
  }
  return count
}
var sumCounts = function (nums) {
  const subSets = getSubsets(nums)
  return getSquareSum(subSets)
}

console.log(sumCounts([1, 2, 1]))
