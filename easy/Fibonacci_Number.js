/**
 * @param {number} n
 * @return {number}
 */
const memo = {}
var fib = function (n) {
  if (n === 0 || n === 1) return n
  if (!memo[n]) {
    memo[n] = fib(n - 1) + fib(n - 2)
  }
  return memo[n]
}
