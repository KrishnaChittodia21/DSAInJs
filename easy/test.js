/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let curr = ''
  let count = ''
  for (let i = 0; i < s.length; i++) {
    curr += s[i]
    if (curr.length === 3) {
      if (new Set(curr).size === 3) {
        count++
      }
      curr = curr.slice(1)
    }
  }
  return count
}

console.log(countGoodSubstrings('aababcabc'))
