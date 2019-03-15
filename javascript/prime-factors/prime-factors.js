function isPrime(number) {
  if ([1, 2].includes(number)) {
    return true;
  } else {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function findDivisor(number, array) {
  if (number === 1) {
    return array;
  }
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      array.push(i);
      return findDivisor(number / i, array);
    }
  }
}

export const primeFactors = (number) => findDivisor(number, []);
