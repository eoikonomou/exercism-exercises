import BigInt from './big-integer';

function square(number) {
  let result = BigInt(2);
  result = result.pow(number - 1);
  return result.toString();
}

function total() {
  let result = BigInt(0);
  for (let i = 1; i < 65; i += 1) {
    result = result.add(square(i));
  }
  return result.toString();
}

export function Grains() {
  return {
    square,
    total,
  };
}
