/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n < 0) {
    n = -n
    x = 1 / x
  }

  if (n % 2 === 0) {
    const half = myPow(x, Math.floor(n / 2))
    return half * half
  } else {
    const half = myPow(x, Math.floor((n - 1) / 2))
    return x * half * half
  }
}
