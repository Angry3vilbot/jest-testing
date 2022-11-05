const arr = require('./analyzeArray');

test('enter [1, 2, 3, 4]', () => {
  expect(arr([1, 2, 3, 4])).toStrictEqual({
    min: 1,
    max: 4,
    length: 4,
    average: 2.5
  });
});

test('enter [10, 20, 30, 40]', () => {
    expect(arr([10, 20, 30, 40])).toStrictEqual({
      min: 10,
      max: 40,
      length: 4,
      average: 25
    });
  });

test('enter [0, 0]', () => {
  expect(arr([0, 0])).toStrictEqual({
    min: 0,
    max: 0,
    length: 2,
    average: 0
  });
});
test('enter [1]', () => {
    expect(arr([1])).toStrictEqual({
      min: 1,
      max: 1,
      length: 1,
      average: 1
    });
  });