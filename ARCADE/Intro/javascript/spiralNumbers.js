function solution(n) {
  const matrix = [...Array(n)].map(() => [...Array(n)])
  let number = 1
  let row = 0
  let col = 0
  let bottomLimit = 0
  let upperLimit = n - 1

  while (number <= n * n) {
    // to right
    for (
      ;
      (row === upperLimit || col < upperLimit) && number <= n * n;
      col++, number++
    ) {
      matrix[row][col] = number
    }

    // to bottom
    for (; row < upperLimit && number <= n * n; row++, number++) {
      matrix[row][col] = number
    }

    // to left
    for (; col > bottomLimit && number <= n * n; col--, number++) {
      matrix[row][col] = number
    }

    // to top
    for (; row > bottomLimit && number <= n * n; row--, number++) {
      matrix[row][col] = number
    }

    row++
    col++
    bottomLimit++
    upperLimit--
  }

  return matrix
}

console.log(solution(3))
// Expected Output:
// [[1,2,3],
//  [8,9,4],
//  [7,6,5]]
console.log(solution(5))
// Expected Output:
//  [[1, 2, 3, 4,5],
//  [16,17,18,19,6],
//  [15,24,25,20,7],
//  [14,23,22,21,8],
//  [13,12,11,10,9]]
