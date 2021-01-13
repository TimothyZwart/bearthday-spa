function getSearchDate(currentDate: string | number, userDate: string): string {
  const date1 = new Date(currentDate);
  const date2 = new Date(userDate);

  date1.setUTCDate(date1.getUTCDate() - 1);
  date2.setUTCFullYear(date1.getUTCFullYear());

  if (date1.getTime() < date2.getTime()) {
    date2.setFullYear(date1.getFullYear() - 1);
  }

  let month =
    date2.getUTCMonth() + 1 > 9
      ? (date2.getUTCMonth() + 1).toString()
      : '0' + (date2.getUTCMonth() + 1).toString();

  let day =
    date2.getUTCDate() < 10
      ? '0' + date2.getUTCDate().toString()
      : date2.getUTCDate().toString();

  let year = date2.getUTCFullYear().toString();
  return [year, month, day].join('-');
}
export default getSearchDate;
