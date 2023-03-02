function solution(n) {
  let integer = n.toString();
  let count = 0;
  while (integer.length > 1) {
    integer = integer
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b))
      .toString();
    count++;
  }

  return count;
}

console.log(solution(5));

console.log(solution(100));

console.log(solution(91));
