function solution(bishop = '', pawn = '') {
  // // check for if they are in same row o colummn. return early
  // if (
  //   bishop.charCodeAt(0) === pawn.charCodeAt(0) ||
  //   bishop.charCodeAt(1) === pawn.charCodeAt(1)
  // ) {
  //   return false
  // }

  // // if not in same color cell. return early
  // if (
  //   (bishop.charCodeAt(0) % 2 === bishop.charCodeAt(1) % 2) !==
  //   (pawn.charCodeAt(0) % 2 === pawn.charCodeAt(1) % 2)
  // ) {
  //   return false
  // }
  if (
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) !==
    Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1))
  ) {
    return false
  }
  return true
}

// 1  49
// a  97
console.log(solution('a1', 'c3'))
// Expected Output:  true

console.log(solution('h1', 'h3'))
// Expected Output:  false

console.log(solution('a5', 'c3'))
// Expected Output:  true

console.log(solution('g1', 'f3'))
// Expected Output:  false

console.log(solution('e7', 'd6'))
// Expected Output:  true

console.log(solution('d4', 'h6'))
// Expected Output:  false
