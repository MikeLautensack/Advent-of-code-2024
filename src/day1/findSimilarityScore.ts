export const findSimilarityScore = (list1: number[], list2: number[]) => {
  let simScoreArr: number[] = [];
  let score: number = 0;
  for (let i = 0; i < list1.length; i++) {
    const num1 = list1[i];
    let count = 0;
    for (let j = 0; j < list2.length; j++) {
      if (list2[j] === num1) {
        count++;
      }
    }
    simScoreArr.push(count * num1);
  }
  for (let i = 0; i < simScoreArr.length; i++) {
    score += simScoreArr[i];
  }

  return score;
};
