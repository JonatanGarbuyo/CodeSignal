function solution(cell) {
  const col = cell.charCodeAt(0) - 97
  const row = cell.charCodeAt(1) - 49
  const board = Array(8).fill(Array(8).fill('cell'))
  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ]

  return moves.reduce((acc, [r, c]) => {
    try {
      if (!board[row + r][col + c]) throw new Error('Out of bounds baby.')
      acc++
    } finally {
      return acc
    }
  }, 0)
}

console.log(solution('a1'))
// // Expected Output: 2
// console.log(solution('c2'))
// // Expected Output: 6
// console.log(solution('d4'))
// // Expected Output: 8
// console.log(solution('g6'))
// // Expected Output: 6
