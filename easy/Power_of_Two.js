/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true
  if (n % 2 !== 0 || n < 1) return false
  let i = 1
  while (n !== 1) {
    if (n % 2 !== 0) return false
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(0))
