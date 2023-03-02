function solution(a = [], b = []) {
  let areSimilar = true;
  let swapCount = 0;
  let swap = {};

  loop1: for (let i = 0; i < a.length; i++) {
    let currentA = a[i];
    let currentB = b[i];
    // if items are eq continue
    if (currentA === currentB) continue;
    // if items are from prev swap continue
    if (swapCount === 1 && currentA === b[swap.i] && currentB === a[swap.i]) {
      swapCount++;
      continue;
    }
    // early return. too many different values.
    if (currentA !== currentB && swap > 2) return false;

    // check next values
    for (let j = i + 1; j < b.length; j++) {
      let nextB = b[j];
      let nextA = a[j];
      if (currentA === nextB && nextA === currentB) {
        swap = { i, j };
        swapCount++;
        continue loop1;
      }
    }
    areSimilar = false;
  }
  return areSimilar;
}

console.log(solution([1, 2, 3], [2, 1, 3]));
// Expected Output:  true
console.log(solution([4, 6, 3], [3, 4, 6]));
// Expected Output: false
console.log(solution([2, 3, 1], [1, 3, 2]));
// Expected Output: true
console.log(solution([1, 2, 2], [2, 1, 1]));
// Expected Output: false
console.log(solution([2, 3, 9], [10, 3, 2]));
// Expected Output: false
console.log(solution([2, 3, 9], [10, 3, 2]));
// Expected Output: false

console.log(
  solution(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
  )
);
// Expected Output: true
