function checkIfValid(numberString) {
  if (numberString.length < 2) {
    return false;
  }
  if (numberString.split(' ').map(number => Number(number)).some(number => Number.isNaN(number))) {
    return false;
  }

  const noSpaceNumberString = numberString.replace(/\s/g, '');
  const numberArray = noSpaceNumberString.split('');
  for (let i = numberArray.length - 2; i >= 0; i -= 2) {
    const product = Number(numberArray[i]) * 2;
    if (product > 9) {
      numberArray[i] = product - 9;
    } else {
      numberArray[i] = product;
    }
  }
  return numberArray.map(num => Number(num)).reduce((prev, curr) => prev + curr, 0) % 10 === 0;
}

export class Luhn {
  constructor(digits) {
    this.valid = checkIfValid(digits.trim());
  }
}
