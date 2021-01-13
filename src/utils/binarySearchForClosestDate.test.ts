import binarySearchForClosestDate from './binarySearchForClosestDate';

const testArray = [
  '2015-06-13',
  '2015-06-16',
  '2015-06-17',
  '2015-06-18',
  '2015-06-20',
  '2015-06-21',
  '2015-06-22',
  '2015-06-27',
  '2015-06-30',
  '2015-07-04',
  '2015-07-05',
  '2015-07-06',
  '2015-07-07',
  '2015-07-11',
  '2015-07-12',
];

test('exact match with 1', () => {
  expect(binarySearchForClosestDate(['1987-07-07'], '1987-07-07')).toBe(
    '1987-07-07'
  );
});

test('test Left', () => {
  expect(binarySearchForClosestDate(testArray, '2015-06-13')).toBe(
    '2015-06-13'
  );
});

test('test right', () => {
  expect(binarySearchForClosestDate(testArray, '2015-07-12')).toBe(
    '2015-07-12'
  );
});

test('test mid', () => {
  expect(binarySearchForClosestDate(testArray, '2015-06-27')).toBe(
    '2015-06-27'
  );
});

test('next Closest from outside left', () => {
  expect(binarySearchForClosestDate(testArray, '2015-06-11')).toBe(
    '2015-06-13'
  );
});

test('next Closest from outside right', () => {
  expect(binarySearchForClosestDate(testArray, '2015-07-13')).toBe(null);
});

test('next Closest in middle', () => {
  expect(binarySearchForClosestDate(testArray, '2015-06-28')).toBe(
    '2015-06-30'
  );
});
