/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  if (k === nums.length) return k
  let count = 0
  const arr = []
  while (nums.length) {
    if (count === k) return arr.length
    const n = nums.pop()
    if (n <= k && !arr.includes(n)) {
      count++
    }
    arr.push(n)
  }
  return arr.length
}

console.log(minOperations([3, 1, 5, 4, 2], 2))
