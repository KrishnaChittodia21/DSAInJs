/**
 * @param {number[][]} nums
 * @return {number}
 */

const checkIsPrime = (num) => {
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}
var diagonalPrime = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const diag1 = nums[i][i]
    const diag2 = nums[i][nums.length - 1 - i]
    if (diag1 !== diag2 && checkIsPrime(diag1) && checkIsPrime(diag2)) {
      max = Math.max(max, diag1, diag2)
    }
    if (checkIsPrime(diag1)) {
      max = Math.max(max, diag1)
    }
    if (checkIsPrime(diag2)) {
      max = Math.max(max, diag2)
    }
  }
  return max
}

console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
)
