const caesarCipher = require('../code/caesar-cipher');

test('Caesar Cipher Test (Example 1)', () => {
    expect(caesarCipher('string')).toBe('tusjoh');
})

test('Caesar Cipher Test (Example 2)', () => {
    expect(caesarCipher('abcxyz')).toBe('bcdyza');
})

test('Caesar Cipher Test (Example 3)', () => {
    expect(caesarCipher('abc.')).toBe('bcd.');
})

test('Caesar Cipher Test (Example 4)', () => {
    expect(caesarCipher('ABCdef')).toBe('BCDefg');
})

test('Caesar Cipher Test (Example 5)', () => {
    expect(caesarCipher('abc.def')).toBe('bcd.efg');
})

test('Caesar Cipher Test (Example 6)', () => {
    expect(caesarCipher('abc!')).toBe('bcd!');
})

test('Caesar Cipher Test (Example 7)', () => {
    expect(caesarCipher('abc123')).toBe('bcd123');
})

test('Caesar Cipher Test (Example 8)', () => {
    expect(caesarCipher('abc def')).toBe('bcd efg');
})

test('Caesar Cipher Test (Example 9)', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
})