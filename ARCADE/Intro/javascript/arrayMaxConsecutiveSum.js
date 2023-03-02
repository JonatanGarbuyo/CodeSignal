function solution(inputArray = [], k) {
  let sum = inputArray.slice(0, k).reduce((prev, curr) => prev + curr);
  let maxSum = sum;

  for (let i = 0, j = k; j < inputArray.length; i++, j++) {
    sum = sum - inputArray[i] + inputArray[j];
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

console.log(solution([2, 3, 5, 1, 6], 2));
//  = 8.

console.log(solution([2, 4, 10, 1], 2));
// Expected Output: 14
