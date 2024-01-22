/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] + 1 > 9) {
    const arr = []
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + carry >= 10) {
        arr.unshift((digits[i] + carry) % 10)
        carry = Math.abs(digits[i] + carry - 9)
      } else {
        arr.unshift(digits[i] + carry)
        if (digits[i] + carry > 9) {
          carry = Math.abs(digits[i] + carry - 9)
        }
        carry = 0
      }
    }
    if (carry > 0) {
      arr.unshift(carry)
    }
    return arr
  }
  const lastDigit = digits[digits.length - 1] + 1
  digits.pop()
  digits.push(lastDigit)
  return digits
}
