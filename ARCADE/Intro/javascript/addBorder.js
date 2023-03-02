// function solution(picture) {
//   let stringSize = picture[0].length;
//   const border = "*".repeat(stringSize + 2);
//   let result = [border];

//   picture.forEach((str) => {
//     result.push(`*${str}*`);
//   });

//   result.push(border);
//   return result;
// }

function solution(picture) {
  let stringSize = picture[0].length;
  const border = "*".repeat(stringSize + 2);

  return [border, ...picture.map((str) => `*${str}*`), border];
}

console.log(solution(["50", "60", "60", "45", "70"]));
