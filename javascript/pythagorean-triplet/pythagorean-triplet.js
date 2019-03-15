export class Triplet {
  constructor(a, b, c) {
    this.sides = [a, b, c].sort((num1, num2) => num1 - num2);
  }

  sum() {
    return this.sides.reduce((acc, val) => acc + val, 0);
  }

  product() {
    return this.sides.reduce((acc, val) => acc * val, 1);
  }

  isPythagorean() {
    const [a, b, c] = this.sides;
    return c ** 2 === (a ** 2) + (b ** 2);
  }

  static where({ sum, minFactor = 1, maxFactor }) {
    function* generate() {
      for (let a = minFactor; a <= maxFactor; a += 1) {
        for (let b = a; b <= (sum ? sum - a : maxFactor); b += 1) {
          for (let c = b; c <= (sum ? sum - a - b : maxFactor); c += 1) {
            const triplet = new Triplet(a, b, c);
            if (triplet.isPythagorean() && !(sum && triplet.sum() !== sum)) {
              yield triplet;
            }
          }
        }
      }
    }
    return [...generate()];
  }
}
