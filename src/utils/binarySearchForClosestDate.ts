function binarySearchForClosestDate(
  dates: string[],
  target: string
): string | null {
  let leftIndex = 0;
  let rightIndex = dates.length - 1;
  let midIndex = 0;
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    const targetDate = new Date(target);
    const midIndexDate = new Date(dates[midIndex]);
    if (targetDate.getTime() === midIndexDate.getTime()) {
      return target;
    } else if (targetDate.getTime() < midIndexDate.getTime()) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  const targetDate = new Date(target);
  const midIndexDate = new Date(dates[midIndex]);
  if (midIndexDate.getTime() > targetDate.getTime()) {
    return dates[midIndex];
  }
  if (midIndex + 1 < dates.length) {
    return dates[midIndex + 1];
  }

  return null;
}
export default binarySearchForClosestDate;
