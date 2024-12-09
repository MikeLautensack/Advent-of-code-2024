export const findDistanceBetweenLists = (list1: number[], list2: number[]) => {
  const sortedList1 = list1.sort();
  const sortedList2 = list2.sort();
  let distances: number[] = [];
  for (let i = 0; i < list1.length; i++) {
    const num1 = sortedList1[i];
    const num2 = sortedList2[i];
    let diff: number;
    if (num1 > num2) {
      diff = num1 - num2;
    } else {
      diff = num2 - num1;
    }
    distances.push(diff);
  }
  let sum: number = 0;
  distances.forEach((distance: number) => {
    sum += distance;
  });
  return sum;
};
