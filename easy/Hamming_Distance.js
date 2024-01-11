/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let num = x ^ y
  let count = 0
  while (num > 0) {
    count++
    num -= num & -num
  }
  return count
}

console.log(hammingDistance(1, 4))
console.log(hammingDistance(1, 3))
console.log(hammingDistance(1, 5))
