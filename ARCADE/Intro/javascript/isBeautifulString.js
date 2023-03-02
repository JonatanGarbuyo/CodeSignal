function countLetters(string) {
  return [...string].reduce((letters, currentLetter) => {
    Object.hasOwn(letters, currentLetter)
      ? (letters[currentLetter] += 1)
      : (letters[currentLetter] = 1)
    return letters
  }, {})
}

function solution(inputString) {
  let isBeautifulString = true
  const letters = countLetters(inputString)

  for (char in letters) {
    if (char === 'a') continue
    const prevChar = String.fromCharCode(char.charCodeAt(0) - 1)
    if (!letters[prevChar] || letters[char] > letters[prevChar]) {
      isBeautifulString = false
      break
    }
  }

  return isBeautifulString
}

console.log(solution('bbbaacdafe'))
// Expected Output:  true

console.log(solution('aabbb'))
// Expected Output:  false
console.log(solution('bbc'))
// Expected Output:  false
console.log(solution('bbbaa'))
// Expected Output:  false
