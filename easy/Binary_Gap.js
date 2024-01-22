/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let prev = -1
  const binary = n.toString(2)
  let max = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (prev !== -1) {
        max = Math.max(max, i - prev)
      }
      prev = i
    }
  }
  return max
}

console.log(binaryGap(22))
console.log(binaryGap(8))
console.log(binaryGap(11))
console.log(binaryGap(9))
