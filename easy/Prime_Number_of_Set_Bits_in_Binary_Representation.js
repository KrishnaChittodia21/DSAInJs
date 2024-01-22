/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const countBit = (num) => {
  let n = 10
  let count = 0
  while (n != 0) {
    n -= n & -n
    count++
  }
  return count
}
const isPrime = (num) => {
  let count = 0
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  return count === 0
}
var countPrimeSetBits = function (left, right) {
  let count = 0
  for (let i = left; i <= right; i++) {
    // const isBinary = i.toString(2).replaceAll('0', '').length
    const isBinary = countBit(i)
    if (isBinary === 1) {
      continue
    } else if (isBinary === 2 || isBinary === 3) {
      count++
    } else if (isPrime(isBinary)) {
      count++
    }
  }
  return count
}

console.log(countPrimeSetBits(6, 10))
console.log(countPrimeSetBits(10, 15))
