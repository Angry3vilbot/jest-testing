const cipher = require('./caesarCipher');

test('enter "ABCD" to become CDEF', () => {
  expect(cipher("ABCD")).toBe("CDEF");
});

test('enter "Hank" to become "Jcpm', () => {
    expect(cipher("Hank")).toBe("Jcpm");
});

test('enter "Zane" to become "Bcpg"', () => {
    expect(cipher("Zane")).toBe("Bcpg");
});

test('enter "zAYIN" to become "bCAKP"', () => {
    expect(cipher("zAYIN")).toBe("bCAKP");
});

test('enter "AB,CD" to become "CD,EF"', () => {
    expect(cipher("AB,CD")).toBe("CD,EF");
});