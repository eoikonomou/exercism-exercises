const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getIndex(item, array) {
  return array.indexOf(item);
}

export const isPangram = (sentence) => {
  if (sentence.length === 0) {
    return false;
  }
  const alphabetCopy = Array.from(ALPHABET);
  sentence.split('').forEach((letter) => {
    const indexOfLetter = getIndex(letter.toLowerCase(), alphabetCopy);
    if (indexOfLetter > -1) {
      alphabetCopy.splice(indexOfLetter, 1);
    }
  });
  return alphabetCopy.length === 0;
};
