export const isIsogram = (word) => {
  let characters = new Set();
  let isIsogram = true;
  word.split('').map(letter => letter.toLowerCase()).forEach((letter) => {
    if (/^[a-z]$/i.test(letter)) {
      if (characters.has(letter)) {
        isIsogram = false;
      } else {
        characters.add(letter);
      }
    }
  });
  return isIsogram;
}
