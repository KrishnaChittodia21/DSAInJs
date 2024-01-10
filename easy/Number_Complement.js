/**
 * @param {number} num
 * @return {number}
 */
const getMask = (num) => {
  let mask = 1
  while (mask < num) {
    mask = (mask << 1) | 1
  }
  return mask
}
var findComplement = function (num) {
  const mask = getMask(num)
  return num ^ mask
}

console.log(findComplement(5))
