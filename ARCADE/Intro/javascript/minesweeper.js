function countMines(arr, i, j) {
  let count = 0;
  if (arr[i][j]) return 1;
  for (let x = i - 1; x < i + 2; x++) {
    if (x < 0 || x === arr.length) continue;
    for (let y = j - 1; y < j + 2; y++) {
      if (y < 0 || y === arr[i].length) continue;
      if (arr[x][y]) count++;
    }
  }
  return count;
}

function solution(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];

    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(countMines(matrix, i, j));
    }
  }

  return result;
}

// console.log(
//   solution([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
//   ])
// );
// // result  [([1, 2, 1], [2, 1, 1], [1, 1, 1])];

// console.log(
//   solution([
//     [true, false, false, true],
//     [false, false, true, false],
//     [true, true, false, true],
//   ])
// );
// // Expected Output:
// // [[0,2,2,1],
// //  [3,4,3,3],
// //  [1,2,3,1]]))

// console.log(
//   solution([
//     [true, true, true],
//     [true, true, true],
//     [true, true, true],
//   ])
// );
// // Expected Output:
// //   [3, 5, 3],
// //   [5, 8, 5],
// //   [3, 5, 3]

// console.log(
//   solution([
//     [false, true, true, false],
//     [true, true, false, true],
//     [false, false, true, false],
//   ])
// );
// // // Expected Output:
// // [[3,3,3,2],
// //  [2,4,5,2],
// //  [2,3,2,2]]

console.log(
  solution([
    [true, false],
    [true, false],
    [false, true],
    [false, false],
    [false, false],
  ])
);

// Expected Output:
// [[1,2],
//  [2,3],
//  [2,1],
//  [1,1],
//  [0,0]]
