/**
 * @param {number} n
 * @return {number}
 */
const map = {}
var tribonacci = function (n) {
  if (n < 0) return 0
  if (n === 0 || n === 1) return n
  if (map[n]) return map[n]
  const res = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
  map[n] = res
  return res
}
console.log(tribonacci(25))
