export const transform = (oldScoreObject) => {
  const newScoreObject = {};
  Object.keys(oldScoreObject).forEach(point => {
    oldScoreObject[point].forEach(letter => {
      newScoreObject[letter.toLowerCase()] = Number(point);
    });
  });
  return newScoreObject;
}
