function isNotBelowHaunted(matrix, i, j) {
  for (; i > 0; i--) {
    if (matrix[i - 1][j] === 0) return false;
  }
  return true;
}

function solution(matrix = []) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isNotBelowHaunted(matrix, i, j)) count += matrix[i][j];
    }
  }

  return count;
}

console.log(
  solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
    [2, 0, 3, 3],
    [2, 0, 3, 3],
  ])
); // 17
// console.log(
//   solution([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//     [2, 0, 3, 3],
//   ])
// ); // 9
// console.log(
//   solution([
//     [1, 0, 3],
//     [0, 2, 1],
//     [1, 2, 0],
//   ])
// ); // 5
// console.log(
//   solution([
//     [1, 1, 1, 0],
//     [0, 5, 0, 1],
//     [2, 1, 3, 10],
//     [2, 1, 3, 10],
//   ])
// ); // 9
