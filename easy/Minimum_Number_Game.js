/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const arr = []
  while (nums.length) {
    const alice = Math.min(...nums)
    nums.splice(nums.indexOf(alice), 1)
    const bob = Math.min(...nums)
    nums.splice(nums.indexOf(bob), 1)
    arr.push(bob, alice)
  }
  return arr
}
