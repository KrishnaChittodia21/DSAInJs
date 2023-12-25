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

console.log(longestNiceSubstring('YazaAay'))
console.log(longestNiceSubstring('Bb'))
console.log(longestNiceSubstring('c'))
console.log(longestNiceSubstring('dDzeE'))
console.log(longestNiceSubstring('abABB'))
