// Solution

const solution = (numbers) => {
  const fakeNums = [...numbers];
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (newArr.length % 2 === 0) {
      newArr.push(fakeNums.shift());
    } else if (newArr.length % 2 !== 0) {
      newArr.push(fakeNums.pop());
    }
  }
  return newArr;
};
