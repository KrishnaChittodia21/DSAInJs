/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let curr = 0
  let final = Number.MAX_SAFE_INTEGERA
  let str = ''
  for (let block of blocks) {
    str += block
    if (str.length === k) {
      if (str === 'B'.repeat(k)) return 0
      str = str.slice(1)
    }
  }
  str = ''
  for (let block of blocks) {
    str += block
    if (block === 'W') curr++
    if (str.length === k) {
      final = Math.min(final, curr)
      curr = str.charAt(0) === 'W' ? --curr : curr
      str = str.slice(1)
    }
  }
  return final
}
