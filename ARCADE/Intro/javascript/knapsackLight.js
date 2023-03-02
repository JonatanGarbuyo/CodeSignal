function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) return value1 + value2;
  if (weight1 > maxW && weight2 > maxW) return 0;

  return [
    { value: value1, weight: weight1 },
    { value: value2, weight: weight2 },
  ]
    .filter((item) => item.weight <= maxW)
    .sort((itemA, itemB) => itemB.value - itemA.value)[0].value;
}

console.log(solution(10, 5, 6, 4, 8));
// the output should be  10.
// You can only carry the first item.

console.log(solution(10, 5, 6, 4, 9));
//  the output should be  16.
//    You're strong enough to take both of the items with you.

console.log(solution(5, 3, 7, 4, 6));
//  the output should be   7.
//    You can't take both items, but you can take any of them.
console.log(solution(15, 2, 20, 3, 2));
// Expected Output:  15
