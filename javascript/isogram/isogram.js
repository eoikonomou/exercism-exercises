export const isIsogram = (word) => {
  let characters = new Set();
  /*
    * We could map to convert letters to lower case but we will iterate
    * array as part of the solution so it would be unwise in terms of
    * performance
  */
  const letterArray = word.split('');
  for (let index = 0; index < letterArray.length; index += 1) {
    let letter = letterArray[index].toLowerCase();
    if (/^[a-z]$/i.test(letter)) {
      if (characters.has(letter)) {
        return false;
      } else {
        characters.add(letter);
      }
    }
  }
  return true;
}
