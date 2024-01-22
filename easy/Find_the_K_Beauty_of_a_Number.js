/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let curr = ''
  let count = 0
  const numsStr = num.toString()
  for (let i = 0; i < numsStr.length; i++) {
    curr += numsStr.charAt(i)
    if (curr.length === k) {
      const currNum = parseInt(curr)
      if (currNum !== 0 && num % currNum === 0) count++
      curr = curr.slice(1)
    }
  }
  return count
}

console.log(divisorSubstrings(240, 2))
console.log(divisorSubstrings(430043, 2))
console.log(divisorSubstrings(30003, 3))
console.log(divisorSubstrings(680, 2))
console.log(divisorSubstrings(2, 1))
