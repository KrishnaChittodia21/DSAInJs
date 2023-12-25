/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  let longestNiceSubstring = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.substring(i, j)

      if (isNice(substring) && substring.length > longestNiceSubstring.length) {
        longestNiceSubstring = substring
      }
    }
  }

  return longestNiceSubstring
}

const isNice = (substring) => {
  const set = new Set(substring.split(''))

  for (const char of set) {
    if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {
      return false
    }
  }

  return true
}

// recursion
const longestNiceSubstringRecur = (s) => {
  if (s.length <= 1) return ''
  const set = new Set(s)
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase()) && set.has(s[i].toUpperCase())) continue
    const left = longestNiceSubstringRecur(s.substring(0, i))
    const right = longestNiceSubstringRecur(s.substring(i + 1))
    return left.length >= right.length ? left : right
  }
  return s
}

console.log(longestNiceSubstringRecur('YazaAay'))
