function solution(inputString = "") {
  const match = inputString.match(/^(?!\s)\d+/);
  return match ? match[0] : "";
}

console.log(solution("123aa1"));
// Expected Output: "123"

console.log(solution("0123456789"));
// Expected Output: "0123456789"

console.log(solution("  3) always check for whitespaces"));
// Expected Output: ""

console.log(solution("the output is 42"));
// Expected Output: ""

console.log(solution("aaaaaaa"));
// Expected Output: ""

console.log(solution("1j2c42ciu5ie99xr0vq5w1slwhq985fp2239qc196d66m"));
// ted Output: "1"
