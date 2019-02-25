export const NucleotideCounts = {
  parse: (sequence) => {
    let adenine = 0;
    let cytosine = 0;
    let guanine = 0;
    let thymine = 0;

    sequence.split('').forEach((nucleotide) => {
      if (nucleotide === 'A') {
        adenine += 1;
      } else if (nucleotide === 'C') {
        cytosine += 1;
      } else if (nucleotide === 'G') {
        guanine += 1;
      } else if (nucleotide === 'T') {
        thymine += 1;
      } else {
        throw new Error('Invalid nucleotide in strand');
      }
    });
    return `${adenine} ${cytosine} ${guanine} ${thymine}`;
  },
};
