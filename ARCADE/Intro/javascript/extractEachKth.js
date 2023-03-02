// function solution(inputArray, k) {
//   let skip = k - 1;
//   return inputArray.reduce((arr, current, index) => {
//     if (index === skip) {
//       skip += k;
//     } else {
//       arr.push(current);
//     }
//     return arr;
//   }, []);
// }

function solution(inputArray, k) {
  return inputArray.filter((item, i) => (i + 1) % k);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// [1, 3, 4, 5, 6, 7, 8, 9, 10]

// Expected Output: [1, 2, 4, 5, 7, 8, 10]
