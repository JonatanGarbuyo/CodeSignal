function solution(a = []) {
  return a.reduce(
    (prev, curr, index) => {
      if (index % 2 === 0) {
        prev[0] += curr;
      } else {
        prev[1] += curr;
      }

      return prev;
    },
    [0, 0]
  );
}

console.log(solution([50, 60, 60, 45, 70]));
