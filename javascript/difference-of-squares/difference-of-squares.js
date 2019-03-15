function arrayOfNumbers(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

function squareOfSum(array) {
  return array.reduce((acc, val) => acc + val, 0) ** 2;
}

function sumOfSquares(array) {
  return array.reduce((acc, val) => acc + (val ** 2), 0);
}

function findDifference(array) {
  return squareOfSum(array) - sumOfSquares(array);
}

export class Squares {
  constructor(number) {
    this.squareOfSum = squareOfSum(arrayOfNumbers(1, number));
    this.sumOfSquares = sumOfSquares(arrayOfNumbers(1, number));
    this.difference = findDifference(arrayOfNumbers(1, number));
  }
}
