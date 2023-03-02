// function solution(grid) {
//   const validSquares = getSquares(grid).every((square) => isValid(square))
//   const validRows = grid.every((row) => isValid(row))
//   const validColumns = getColumns(grid).every((col) => isValid(col))

//   return validSquares && validRows && validColumns
// }

// function getSquares(grid) {
//   const squares = []
//   const coords = [
//     [0, 3],
//     [3, 6],
//     [6, 9],
//   ]

//   coords.map(([from, to]) => {
//     for (let i = 0; i < grid.length; i += 3) {
//       const sqr1 = grid[i].slice(from, to)
//       const sqr2 = grid[i + 1].slice(from, to)
//       const sqr3 = grid[i + 2].slice(from, to)
//       squares.push(sqr1.concat(sqr2, sqr3))
//     }
//     return
//   })
//   return squares
// }

// function getColumns(grid) {
//   return grid.map((row, i) => row.map((_, j) => grid[j][i]))
// }

function isValid(arr) {
  return eval(arr.join`*`) == 362880
}

function getColumn(grid, i) {
  return grid.map((row) => row[i])
}

function getSquare(grid, i) {
  return grid[i].map((_, j) => {
    const rowIndex = 3 * ((i / 3) | 0) + ((j / 3) | 0)
    const colIndex = 3 * (i % 3) + (j % 3)
    return grid[rowIndex][colIndex]
  })
}

function solution(grid) {
  return grid.every(
    (row, i) =>
      isValid(row) && isValid(getColumn(grid, i)) && isValid(getSquare(grid, i))
  )
}

/* test */
console.log(
  solution([
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5],
  ])
)
//  Expected Output: true

console.log(
  solution([
    [8, 3, 6, 5, 3, 6, 7, 2, 9],
    [4, 2, 5, 8, 7, 9, 3, 8, 1],
    [7, 9, 1, 2, 1, 4, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5],
  ])
)
// Expected Output: false

console.log(
  solution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
  ])
)
// Expected Output: false

console.log(
  solution([
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
  ])
)
// Expected Output: false

console.log(
  solution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ])
)
// Expected Output: false
