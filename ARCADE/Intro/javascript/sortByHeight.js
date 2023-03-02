function solution(a = []) {
  let arr = a.slice();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === -1) continue;

      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
//, the output should be
// [-1, 150, 160, 170, -1, -1, 180, 190].
