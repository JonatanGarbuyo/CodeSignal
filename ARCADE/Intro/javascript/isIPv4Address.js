// function solution(inputString = "") {
//   const arr = inputString.split(".");
//   if (arr.length !== 4) return false;

//   return arr.every((value) => {
//     console.log("octet: ", value);
//     console.log("+octet: ", +value);
//     console.log("match: ", value.match("^[0-9]+$"));

//     return +value >= 0 && +value < 256 && value.match("^[0-9]+$");
//   });
// }

function solution(inputString = "") {
  return /^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?|0)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?|0)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?|0)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?|0)$/.test(
    inputString
  );
}

console.log(solution("172.316.254.1"));
console.log(solution("1.1.1.1a"));
console.log(solution("0..1.0"));
console.log(solution("0.254.255.0")); // true
