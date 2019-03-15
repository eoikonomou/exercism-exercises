function getClassification(number, sum) {
  if (sum === number) {
    return 'perfect';
  } else if (sum > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
}

function sumOfFactors(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  return getClassification(number, sumOfFactors(number));
}
