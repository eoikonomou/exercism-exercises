function isPalindrome(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10) === num;
}

function generateFactors(num, max, min) {
  const factors = [];
  for (let i = min; i <= max; i += 1) {
    for (let j = i; j <= max; j += 1) {
      const product = i * j;
      if (product === num) {
        factors.push([i, j]);
      }
    }
  }
  if (factors.length === 0) {
    factors.push([1, num]);
  }
  return factors;
}

export class Palindromes {
  constructor(smallest = undefined, largest = undefined) {
    this.smallest = smallest;
    this.largest = largest;
  }

  set smallest(smallest) {
    this.min = smallest;
  }

  get smallest() {
    if (this.min === undefined) {
      throw new Error('min must be <= max');
    } else {
      return this.min;
    }
  }

  set largest(largest) {
    this.max = largest;
  }

  get largest() {
    if (this.max === undefined) {
      throw new Error('min must be <= max');
    } else {
      return this.max;
    }
  }

  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      return new Palindromes();
    }
    let min = null;
    let max = null;
    let smallestFactors = [];
    let largestFactors = [];
    for (let a = minFactor; a <= maxFactor; a += 1) {
      for (let b = a; b <= maxFactor; b += 1) {
        const product = a * b;
        if (isPalindrome(product)) {
          if (min === null || product < min) {
            min = product;
            smallestFactors = generateFactors(min, maxFactor, minFactor);
          } else if (max === null || product > max) {
            max = product;
            largestFactors = generateFactors(max, maxFactor, minFactor);
          }
        }
      }
    }
    return new Palindromes(
      { value: min, factors: smallestFactors },
      { value: max, factors: largestFactors },
    );
  }
}
