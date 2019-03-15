const bigInt = require('./lib/big-integer');

function BigInt(initialValue) {
  const value = bigInt(initialValue);
  return {
    add: number => value.plus(number),
    subtract: number => value.minus(number),
    pow: number => value.pow(number),
    toString: () => value.toString(),
  };
}

module.exports = BigInt;
