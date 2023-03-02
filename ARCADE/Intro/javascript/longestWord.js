// function solution(text = '') {
//   return text
//     .match(/[a-z]+/ig)
//     .reduce(
//       (longest, word) => (longest.length > word.length ? longest : word),
//       ''
//     )
// }

function solution(text = '') {
  return text
    .match(/[a-z]+/gi)
    .sort((wordA, wordB) => wordB.length - wordA.length)
    .shift()
}

console.log(solution('Ready, steady, go!'))
// Expected Output: "steady"
console.log(solution('Ready[[[, steady, go!'))
// Expected Output: "steady"
console.log(solution('ABCd'))
// Expected Output: "ABCd"
console.log(solution('To be or not to be'))
// Expected Output: "not"
console.log(solution('You are the best!!!!!!!!!!!! CodeFighter ever!'))
// Expected Output: "CodeFighter"
