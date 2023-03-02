// function solution(inputArray = []) {
//   let arr = [...inputArray].sort((a, b) => a - b);
//   let jumpLength = 2;
//   let obstacles = true;

//   obstacleLoop: while (obstacles) {
//     let i = 0;
//     let jump = jumpLength;
//     while (i < arr.length) {
//       let obstacle = arr[i];
//       if (jump === obstacle) {
//         jumpLength++;
//         continue obstacleLoop;
//       } else if (jump < obstacle) jump += jumpLength;
//       else if (jump > obstacle) i++;
//     }

//     obstacles = false;
//   }

//   return jumpLength;
// }

function solution(inputArray = []) {
  let jumpLength = 2;
  while (inputArray.some((obstacle) => obstacle % jumpLength === 0)) {
    jumpLength++;
  }
  return jumpLength;
}

console.log(solution([5, 3, 6, 7, 9])); // [3, 5, 6, 7, 9]
// the output should be  4.

console.log(solution([2, 3]));
// Expected Output: 4

console.log(solution([1, 4, 10, 6, 2]));
// Expected Output: 7

console.log(solution([1000, 999]));
// Expected Output: 6

console.log(solution([19, 32, 11, 23]));
// Expected Output: 3

console.log(solution([5, 8, 9, 13, 14]));
// Expected Output: 6

// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     Non-empty array of positive integers.

//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 1000,
//     1 ≤ inputArray[i] ≤ 1000.

//     [output] integer

//     The desired length.
