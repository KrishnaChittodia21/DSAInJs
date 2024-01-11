/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return 0
  const hex = '0123456789abcdef'
  let res = ''
  while (num !== 0) {
    const digit = hex[num & 0xf]
    res = digit + res
    num >>>= 4
  }
  return res
}
console.log(toHex(26))
console.log(toHex(-1))
