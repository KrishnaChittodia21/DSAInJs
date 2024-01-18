/**
 * @param {character[][]} board
 * @return {number}
 */

const dfs = (board, i, j) => {
  if (board[i][j] !== 'p') return 0
  let res = 0
  if (i - 1 >= 0 && board[i - 1][j] === 'p') res++
  if (i + 1 < board.length && board[i + 1][j] === 'p') res++
  if (j - 1 >= 0 && board[i][j - 1] === 'p') res++
  if (j + 1 < board[0].length && board[i][j + 1] === 'p') res++
  return res
}

const numRookCaptures = function (board) {
  let res = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        res += dfs(board, i, j)
      }
    }
  }
  return res
}

const board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
]

console.log(numRookCaptures(board))
