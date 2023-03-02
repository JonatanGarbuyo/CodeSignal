function solution(inputArray = []) {
  return inputArray.reduce((maximalDifference, current, i, arr) => {
    const prev = arr[i - 1] === undefined ? current : arr[i - 1];
    const currentDifference = Math.abs(current - prev);
    return Math.max(maximalDifference, currentDifference);
  }, 0);
}

console.log(solution([2, 4, 1, 0]));
// solution(inputArray) = 3.

console.log(solution([0, 10, 2, -1]));
// solution(inputArray) = 3.
