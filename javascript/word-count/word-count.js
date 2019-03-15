function prepareSentence(sentence) {
  return sentence.toLowerCase().trim().split(/[\s]+/g);
}

function addToObject(obj, word) {
  if (obj[word] && typeof obj[word] === 'number') {
    obj[word] += 1;
  } else {
    obj[word] = 1;
  }
}

export class Words {
  count(sentence) {
    const result = {};
    prepareSentence(sentence).forEach((word) => { addToObject(result, word) });
    return result;
  }
}
