const ALLERGY_SCORES = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

function getAllergies(score) {
  if (score === 0) {
    return [];
  }
  const allergies = [];
  let remainingScore = score > 255 ? score % 256 : score;
  const items = Object.keys(ALLERGY_SCORES);
  for (let i = items.length - 1; i >= 0; i -= 1) {
    if (ALLERGY_SCORES[items[i]] <= remainingScore) {
      allergies.push(items[i]);
      remainingScore -= ALLERGY_SCORES[items[i]];
    }
  }
  return allergies.reverse();
}

export class Allergies {
  constructor(score) {
    this.allergies = getAllergies(score);
  }

  list() {
    return this.allergies;
  }

  allergicTo(item) {
    return this.allergies.includes(item);
  }
}
