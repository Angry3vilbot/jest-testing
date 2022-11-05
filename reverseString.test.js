const reverseString = require('./reverseString');

test('enter "hello" to become "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('enter "werner von kerman" to become "namrek nov renrew"', () => {
    expect(reverseString("werner von kerman")).toBe("namrek nov renrew");
});

test('enter "123" to become "321"', () => {
    expect(reverseString("123")).toBe("321");
});