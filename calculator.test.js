const calculator = require('./calculator');

test('enter 10, 22 to become 32', () => {
  expect(calculator.add(10, 22)).toBe(32);
});

test('enter 9, 3 to become 6', () => {
    expect(calculator.subtract(9, 3)).toBe(6);
});

test('enter 10, 22 to become 220', () => {
    expect(calculator.multiply(10, 22)).toBe(220);
});

test('enter 10, 10 to become 1', () => {
    expect(calculator.divide(10, 10)).toBe(1);
});