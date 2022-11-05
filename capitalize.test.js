const capitalize = require('./capitalize');

test('enter "hello" to become "Hello"', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('enter "werner von kerman" to become "Werner von kerman"', () => {
    expect(capitalize("werner von kerman")).toBe("Werner von kerman");
});

test('enter "Already capitalized" to become "Already capitalized"', () => {
    expect(capitalize("Already capitalized")).toBe("Already capitalized");
});