/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const checkCase = (str) => {
  switch (str) {
    case '00':
      return 0
    case '01':
      return 1
    case '10':
      return 1
    case '11':
      return -1
  }
}

var addBinary = function (a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let res = ''
  let carry = 0
  while (i >= 0 && j >= 0) {
    const afc = a.charAt(i)
    const bfc = b.charAt(j)
    const sum = checkCase(`${afc}${bfc}`)
    if (sum < 0) {
      res = 0 + carry + '' + res
      carry = 1
    } else {
      if (sum + carry > 1) {
        res = 0 + '' + res
        carry = 1
      } else {
        res = sum + carry + '' + res
        carry = 0
      }
    }
    i--
    j--
  }

  while (i >= 0) {
    const afc = a.charAt(i)
    if (carry > 0) {
      const sum = checkCase(`${afc}${carry}`)
      if (sum < 0) {
        res = 0 + '' + res
        carry = 1
      } else {
        res = sum + '' + res
        carry = 0
      }
    } else {
      res = afc + '' + res
    }
    i--
  }
  while (j >= 0) {
    const bfc = b.charAt(j)
    if (carry > 0) {
      const sum = checkCase(`${bfc}${carry}`)
      if (sum < 0) {
        res = 0 + '' + res
        carry = 1
      } else {
        res = sum + '' + res
        carry = 0
      }
    } else {
      res = bfc + '' + res
    }
    j--
  }
  if (carry > 0) {
    res = carry + '' + res
  }
  return res
}
