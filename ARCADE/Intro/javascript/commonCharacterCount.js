// function solution(s1 = "", s2 = "") {
//   let count = 0;
//   let chars = new Set(s1);
//
//   chars.forEach((char) => {
//     let s1CharOccurrences = [...s1.matchAll(char)].length;
//     let s2CharOccurrences = [...s2.matchAll(char)].length;
//     if (s1CharOccurrences && s2CharOccurrences)
//       count += Math.min(s1CharOccurrences, s2CharOccurrences);
//   });
//
//   return count;
// }

function solution(s1 = "", s2 = "") {
  let chars = [...new Set(s1)];

  return chars.reduce((sum, char) => {
    let s1CharOccurrences = [...s1.matchAll(char)].length;
    let s2CharOccurrences = [...s2.matchAll(char)].length;
    return sum + Math.min(s1CharOccurrences, s2CharOccurrences);
  }, 0);
}

console.log(solution((s1 = "aabcc"), (s2 = "adcaa")));
// the output should be 3.

console.log(solution((s1 = "zzzz"), (s2 = "zzzzzzz")));
// Expected Output: 4
