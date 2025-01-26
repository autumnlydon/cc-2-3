// My Solution:

// const solution = (numbers) => {
//   const fakeNums = [...numbers];
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (newArr.length % 2 === 0) {
//       newArr.push(fakeNums.shift());
//     } else if (newArr.length % 2 !== 0) {
//       newArr.push(fakeNums.pop());
//     }
//   }
//   return newArr;
// };

// Carmen's Solution:

const solution = (numbers) => {
  const newArr = [];
  let i = 0;
  while (newArr.length < numbers.length) {
    first = numbers[i];
    last = numbers[numbers.length - 1 - i];
    newArr.push(first);
    if (i === numbers.length - 1 - i) {
      break;
    } else {
      newArr.push(last);
    }
    i++;
  }
  return newArr;
};

console.log(solution([0, 5, 6, 8, 2]));
