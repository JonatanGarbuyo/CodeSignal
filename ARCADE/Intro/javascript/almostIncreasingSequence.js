function solution(arr = []) {
  let flag = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let prev = arr[i - 1] || Number.NEGATIVE_INFINITY;

    if (current <= prev) {
      flag++;
      if (flag > 1) return false;
      let ant = arr[i - 2] || Number.NEGATIVE_INFINITY;
      let next = arr[i + 1] || Number.POSITIVE_INFINITY;

      if (current <= ant && next <= prev) {
        return false;
      }
    }
  }

  return flag < 2;
}

console.log(solution([1, 3, 2, 1])); // false
console.log(solution([1, 3, 2])); // true
console.log(solution([1, 1, 2, 3, 4, 4])); // false
console.log(solution([10, 1, 2, 3, 4, 5])); // true
console.log(solution([1, 2, 1, 2])); // false
console.log(solution([1, 2, 3, 4, 5, 3, 5, 6])); // false
console.log(solution([40, 50, 60, 10, 20, 30])); // false
console.log(solution([1, 2, 3, 4, 3, 6])); // true
console.log(solution([3, 5, 67, 98, 3])); // true
console.log(solution([1, 2, 5, 3, 5])); // true
console.log(solution([1, 2, 3, 4, 99, 5, 6])); // true

/*
You don't need to constantly check the entire array, nor use multiple loops.

The problem can be broken down to smaller questions. For each element in the list...

Is the current element greater than the last (increasing)?
        Yes...
            Good! We don't need to do anything.
        No...
            Has this happened already? If so, it's not almost increasing.
            If we remove the previous item, are the surrounding items fixed?
            No? What if we remove the current item instead?
            Still no? Then that means we can't solve this in one move. It's not almost increasing.
*/
