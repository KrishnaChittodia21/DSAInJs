/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const firstRow = 'qwertyuiop'
  const secondRow = 'asdfghjkl'
  const thirdRow = 'zxcvbnm'
  let isFirstRow = true
  let isSecondRow = true
  let isThirdRow = true
  const res = []
  for (let word of words) {
    const alpha = [...new Set(word.toLowerCase().split(''))]
    if (alpha.some((e) => firstRow.includes(e))) {
      isFirstRow = false
    }
    if (alpha.some((e) => secondRow.includes(e))) {
      isSecondRow = false
    }
    if (alpha.some((e) => thirdRow.includes(e))) {
      isThirdRow = false
    }
    if (
      (!isFirstRow && isSecondRow && isThirdRow) ||
      (!isSecondRow && isFirstRow && isThirdRow) ||
      (!isThirdRow && isFirstRow && isSecondRow)
    ) {
      res.push(word)
    }
    isFirstRow = true
    isSecondRow = true
    isThirdRow = true
  }
  return res
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))
