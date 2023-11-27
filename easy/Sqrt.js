/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 3) {
    return x === 0 ? 0 : 1
  }
  for (let i = 1; i <= Math.ceil(x / 2); i++) {
    if (i * i === x) {
      return i
    }
    if (i * i > x) {
      return i - 1
    }
  }
}

console.log(mySqrt(10))
