function differByOneCharacter(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count === 1;
}

function checkArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!differByOneCharacter(arr[i], arr[i + 1])) return false;
  }
  return true;
}

function solution(inputArray = [""]) {
  let _permutations = [];

  const permute = (arr, permutation = []) => {
    if (!arr.length) {
      _permutations.push(permutation);
      return;
    }

    for (let i in arr) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);

      permute(curr, permutation.concat(next));
    }
  };

  permute(inputArray);

  return _permutations.some((arr) => checkArr(arr));
}

console.log(solution(["aba", "bbb", "bab"]));
// Expected Output: false

console.log(solution(["ab", "bb", "aa"]));
// Expected Output: true

console.log(solution(["zzzzab", "zzzzbb", "zzzzaa"]));
// Expected Output: true

console.log(solution(["abc", "bef", "bcc", "bec", "bbc", "bdc"]));
// Expected Output: true

console.log(solution(["abc", "abx", "axx", "abc"]));
// Expected Output: false

console.log(solution(["abc", "abx", "axx", "abx", "abc"]));
// Expected Output: true

//
/*
codewriting

300

Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements 
in such a way that each consecutive pair of strings differ by exactly one character. 
Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

    For inputArray = ["aba", "bbb", "bab"], the output should be
    solution(inputArray) = false.

    There are 6 possible arrangements for these strings:
        ["aba", "bbb", "bab"]
        ["aba", "bab", "bbb"]
        ["bbb", "aba", "bab"]
        ["bbb", "bab", "aba"]
        ["bab", "bbb", "aba"]
        ["bab", "aba", "bbb"]

    None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

    For inputArray = ["ab", "bb", "aa"], the output should be
    solution(inputArray) = true.

    It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.string inputArray

    A non-empty array of strings of lowercase letters.

    Guaranteed constraints:
    2 ≤ inputArray.length ≤ 10,
    1 ≤ inputArray[i].length ≤ 15.

    [output] boolean

    Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).

[JavaScript] Syntax Tips */
