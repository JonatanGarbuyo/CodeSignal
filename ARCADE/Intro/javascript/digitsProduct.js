// function solution(product) {
//   if (product === 0) return 10
//   if (product === 1) return 1

//   const digits = []
//   let currentValue = product

//   while (currentValue > 1) {
//     for (let i = 9; i > 0; i--) {
//       if (i === 1) return -i
//       const isDivisible = currentValue % i === 0
//       if (isDivisible) {
//         digits.push(i)
//         currentValue = currentValue / i
//         break
//       }
//     }
//   }

//   return parseInt(digits.reverse().join(''))
// }

function solution(product) {
  if (product === 0) return 10
  if (product === 1) return 1

  const digits = []
  const divisors = [9, 8, 7, 6, 5, 4, 3, 2]
  let currentValue = product

  while (currentValue > 1) {
    const divisor = divisors.find((divisor) => currentValue % divisor === 0)

    if (divisor) {
      digits.unshift(divisor)
      currentValue /= divisor
    } else return -1
  }

  return parseInt(digits.join(''))
}

console.log(solution(0))
//  Expected Output:  10
console.log(solution(1))
//  Expected Output:  1
console.log(solution(13))
//  Expected Output:  -1
console.log(solution(12))
//  Expected Output:  26
console.log(solution(19))
//  Expected Output:  -1
console.log(solution(450))
//  Expected Output:  2559
console.log(solution(243))
//  Expected Output:  399
console.log(solution(576))
//  Expected Output:  889
console.log(solution(600))
//  Expected Output:  889
