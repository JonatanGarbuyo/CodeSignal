function solution(inputArray) {
  let result = [];
  let longestStringSize = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let str = inputArray[i];
    if (str.length === longestStringSize) {
      result.push(str);
    }
    if (str.length > longestStringSize) {
      longestStringSize = str.length;
      result = [str];
    }
  }

  return result;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));

/*
 Expected Output:
["aba", 
 "vcd", 
 "aba"]
*/
console.log(solution(["abc", "eeee", "abcd", "dcd"]));
/* Expected Output:
["eeee", 
 "abcd"]
*/

console.log(
  solution(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"])
);
/*
Expected Output:

["zzzzzz", 
 "abcdef", 
 "aaaaaa"]

*/
