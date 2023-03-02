function solution(s) {
  return s.replace(/(.)\1*/g, (match, char) => {
    return match.length > 1 ? match.length + char : char
  })
}

// function solution(s) {
//   return getCharList(s)
//     .map(([char, count]) => (count > 1 ? count + char : char))
//     .join('')
// }

// function getCharList(s) {
//   const charsList = []
//   let currCharCount = ['', 0]

//   s.split('').forEach((char, i) => {
//     if (currCharCount[0] !== char && i !== 0) {
//       charsList.push(currCharCount)
//       currCharCount = [char, 1]
//     } else {
//       currCharCount[0] = char
//       currCharCount[1]++
//     }
//   })
//   charsList.push(currCharCount)

//   return charsList
// }

console.log(solution('aabbbc'))
// Expected Output: "2a3bc"
console.log(solution('abbcabb'))
// Expected Output: "a2bca2b"
