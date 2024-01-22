/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const map = {}

  if (map[n]) {
    return map[n]
  }
  if (n < 0) {
    return 0
  }
  if (n === 0) {
    return 1
  }

  const res = climbStairs(n - 1) + climbStairs(n - 2)
  map[n] = res
  return res
}

console.log(climbStairs(3))
