// function solution(inputString) {
//   const numbers = inputString.match(/\d+/g)
//   return numbers
//     ? numbers.reduce((acc, current) => {
//         return acc + parseInt(current)
//       }, 0)
//     : 0
// }

function solution(inputString) {
  return (inputString.match(/\d+/g) ?? []).reduce((acc, current) => {
    return acc + parseInt(current)
  }, 0)
}

console.log(solution('no digits at all'))
// Expected Output: 0
console.log(solution('there are some (12) digits 5566 in this 770 string 239'))
// Expected Output: 6587
