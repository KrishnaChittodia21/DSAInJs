/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  if (s.length < 3) return 0
  const stk = []
  let i = 0
  let j = 3
  while (j <= s.length) {
    const set = new Set(s.substring(i, j))
    if (set.size === 3) stk.push(s.substring(i, j))
    i++
    j++
  }
  return stk.length
}

console.log(countGoodSubstrings('aababc'))
