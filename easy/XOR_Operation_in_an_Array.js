/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const nums = []
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i)
  }
  return nums.reduce((a, b) => a ^ b)
}
console.log(xorOperation(5, 0))
