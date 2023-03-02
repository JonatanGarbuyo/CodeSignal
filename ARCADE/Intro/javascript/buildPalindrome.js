function ispalindrome(string) {
  return string === [...string].reverse().join('')
}

function solution(st) {
  for (let i = 0; i < st.length; i++) {
    string = st + [...st].slice(0, i).reverse().join('')
    if (ispalindrome(string)) return string
  }
}

console.log(solution('abcdc'))
// Expected Output: "abcdcba"

// console.log(solution('ababab'))
// // Expected Output: "abababa"

// console.log(solution('abba'))
// // Expected Output: "abba"
