function solution(matrix = []) {
  const squares = new Set()
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const square = `${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${
        matrix[i + 1][j + 1]
      }`
      squares.add(square)
    }
  }
  return squares.size
}

console.log(
  solution([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1],
  ])
)
