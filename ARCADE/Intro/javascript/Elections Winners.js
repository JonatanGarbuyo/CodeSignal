const assert = require('assert')

function solution(votes, k) {
  const mostVoted = Math.max(...votes)
  if (k === 0) {
    const candidates = votes.sort((a, b) => b - a)
    return candidates[0] === candidates[1] ? 0 : 1
  }
  return votes.filter((num) => num + k > mostVoted).length
}

assert(solution([2, 3, 5, 2], 3) === 2, '1')

assert(solution([1, 3, 3, 1, 1], 0) === 0, '2')

assert(solution([5, 1, 3, 4, 1], 0) === 0, '3')

assert(solution([1, 1, 1, 1], 1) === 4, '4')

assert(solution([1, 1, 1, 1], 0) === 0, '5')

assert(solution([3, 1, 1, 3, 1], 2) === 0, '6')
