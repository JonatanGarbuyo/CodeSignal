// function solution(code) {
//   return code
//     .match(/[01]{8}/g)
//     .map((byte) => String.fromCharCode(parseInt(byte, 2)))
//     .join('')
// }

function solution(code) {
  return code.replace(/[01]{8}/g, (byte) =>
    String.fromCharCode(parseInt(byte, 2))
  )
}

console.log(solution('010010000110010101101100011011000110111100100001'))
// Expected Output: "Hello!"
