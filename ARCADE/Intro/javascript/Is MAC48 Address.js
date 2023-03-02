function solution(inputString) {
  return /^\d{2}(-[0-9a-f]{2}){5}$/i.test(inputString)
}

console.log(solution('००-00-00-00-00-00'))
