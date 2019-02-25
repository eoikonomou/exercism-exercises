function getFactors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

export const convert = (number) => {
  const factors = getFactors(number);
  let result = '';
  if (factors.includes(3)) {
    result += 'Pling';
  }
  if (factors.includes(5)) {
    result += 'Plang';
  }
  if (factors.includes(7)) {
    result += 'Plong';
  }
  if (result === '') {
    result += number;
  }
  return result;
}
