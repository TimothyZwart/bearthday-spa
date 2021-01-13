import getSearchDate from './getSearchDate';

test('should be 2018-07-07', () => {
  expect(getSearchDate('2018-11-30', '1987-07-07')).toBe('2018-07-07');
});

test('test first of the month', () => {
  expect(getSearchDate('2018-11-30', '1987-07-01')).toBe('2018-07-01');
});

test('expect the 10th', () => {
  expect(getSearchDate('2018-11-30', '1987-10-10')).toBe('2018-10-10');
});

test('testing ahead of year expects 12/21/2017', () => {
  expect(getSearchDate('2018-11-30', '1987-12-21')).toBe('2017-12-21');
});

test('Leap year to non-leap year test', () => {
  expect(getSearchDate('2018-11-30', '2004-02-29')).toBe('2018-03-01');
});

test('Leap year to leap year test', () => {
  expect(getSearchDate('2020-11-30', '2004-02-29')).toBe('2020-02-29');
});

test('Date from epoc time', () => {
  expect(getSearchDate(1610397243591, '2004-02-29')).toBe('2020-02-29');
});

test('New Year Test', () => {
  expect(getSearchDate('2020-12-31', '2004-02-29')).toBe('2020-02-29');
});

test('Same Date', () => {
  expect(getSearchDate('2004-01-29', '2004-01-29')).toBe('2003-01-29');
});
