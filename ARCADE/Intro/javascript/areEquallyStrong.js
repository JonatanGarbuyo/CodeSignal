// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//   let you = Math.max(yourLeft, yourRight);
//   let friend = Math.max(friendsLeft, friendsRight);

//   return you === friend;
// }

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    yourLeft + yourRight === friendsLeft + friendsRight
  );
}

console.log(solution(20, 15, 5, 20));
// Expected Output: false
console.log(solution(15, 10, 15, 9));
// Expected Output: false
console.log(solution(10, 15, 5, 20));
// Expected Output: false
