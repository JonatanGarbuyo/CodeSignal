function solution(inputString = "") {
  let count = 0;

  const chars = inputString.split("").reduce((letters, current, i, arr) => {
    letters.hasOwnProperty(current)
      ? letters[current]++
      : (letters[current] = 1);
    return letters;
  }, {});

  for (const value of Object.values(chars)) {
    if (value % 2 !== 0) count++;
    if (count > 1) {
      return false;
    }
  }

  return true;
}

// //
// function solution(inputString) {
//     return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;
// }
// //

console.log(solution("aabb"));
// Expected Output: true
console.log(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"));
// Expected Output: false
console.log(solution("abbcabb"));
// Expected Output: true
console.log(solution("zyyzzzzz"));
// Expected Output: true
console.log(solution("z"));
// Expected Output: true
console.log(solution("zaa"));
// Expected Output: true
console.log(solution("abca"));
// Expected Output: false
console.log(solution("abcad"));
// Expected Output: false
console.log(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"));
// Expected Output: false
console.log(solution("abdhuierf"));
// Expected Output: false
