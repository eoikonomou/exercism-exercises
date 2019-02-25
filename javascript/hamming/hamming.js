export const compute = (originalDNA, mutatedDNA) => {
  if (originalDNA.length !== mutatedDNA.length) {
    throw new Error('left and right strands must be of equal length');
  }
  if (originalDNA === mutatedDNA) {
    return 0;
  }
  return originalDNA.split('').filter((character, index) => character !== mutatedDNA[index]).length;
};

/*
// Second implementation

function countDifference(str1, str2) {
  if (str1 === str2) {
    return 0;
  }
  const char1 = str1.slice(0, 1);
  const char2 = str2.slice(0, 1);
  str1 = str1.substring(1);
  str2 = str2.substring(1);
  return ((char1 === char2) ? 0 : 1) + countDifference(str1, str2);
}

export const compute = (originalDNA, mutatedDNA) => {
  if (originalDNA.length !== mutatedDNA.length) {
    throw new Error('left and right strands must be of equal length');
  }
  if (originalDNA === mutatedDNA) {
    return 0;
  }
  return countDifference(originalDNA, mutatedDNA);
};
*/
