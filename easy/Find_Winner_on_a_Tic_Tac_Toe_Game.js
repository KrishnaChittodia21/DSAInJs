/**
 * @param {number[][]} moves
 * @return {string}
 */

const check = (arr) => {
  const possibleCombs = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20'],
  ]
  return possibleCombs.some(
    (el) => arr.includes(el[0]) && arr.includes(el[1]) && arr.includes(el[2])
  )
}
var tictactoe = function (moves) {
  if (moves.length < 5) return 'Pending'
  const firstMoves = []
  const secondMoves = []
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i]
    if (i % 2 === 0) {
      firstMoves.push(`${row}${col}`)
    } else {
      secondMoves.push(`${row}${col}`)
    }
  }
  return check(firstMoves) && check(secondMoves)
    ? 'Draw'
    : check(firstMoves)
    ? 'A'
    : check(secondMoves)
    ? 'B'
    : firstMoves.length + secondMoves.length === 9
    ? 'Draw'
    : 'Pending'
}

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
)

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
)

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
)
