/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let curr = 0
  let final = 0
  let start = 0
  let end = 0
  while (end < k) {
    if (blocks[end] === 'W') curr++
    end++
  }
  final = curr
  while (end < blocks.length) {
    if (blocks[start] === 'W') curr--
    if (blocks[end] === 'W') curr++
    final = Math.min(final, curr)
    start++
    end++
  }
  return final
}
