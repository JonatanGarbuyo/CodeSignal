// function solution(n) {
//   const numbersList = n.toString().split('')
//   return numbersList.reduce((max, _, i, arr) => {
//     const number = [...arr]
//     number.splice(i, 1)
//     return Math.max(max, parseInt(number.join('')))
//   }, 0)
// }

// Math solution
function solution(n) {
  const length = n.toString().length

  return [...Array(length)].reduce((currentMax, _, i) => {
    const d = 10 ** i
    const number = (n % d) + Math.floor(Math.floor(n / d) / 10) * d
    return Math.max(currentMax, number)
  }, 0)
}

console.log(solution(152))
// Expected Output:  52
console.log(solution(1001))
// Expected Output:  101
console.log(solution(10))
// Expected Output:  1
console.log(solution(222219))
// Expected Output:  22229
console.log(solution(222250))
// Expected Output:  22250
console.log(solution(44435))
// Expected Output:  4445
console.log(solution(12))
// Expected Output:  2
