function solution(n) {
  let numbers = n.toString().split("");
  let firstHalf = numbers.slice(0, numbers.length / 2);
  let secondtHalf = numbers.slice(numbers.length / 2);

  return (
    firstHalf.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) ===
    secondtHalf.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
  );
}

console.log(solution(1230));
// the output should be solution(n) = true;
console.log(solution(239017));
// the output should be  solution(n) = false.
