// function solution(upSpeed, downSpeed, desiredHeight) {
//   let count = 0;
//   let height = 0;

//   while (true) {
//     height += upSpeed;
//     count++;
//     if (height >= desiredHeight) break;
//     height -= downSpeed;
//   }

//   return count;
// }

function solution(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

console.log(solution(100, 10, 910));
//, the output should be 10.

console.log(solution(10, 9, 4));
//Expected Output: 1

console.log(solution(6, 5, 10));
// Expected Output: 5
