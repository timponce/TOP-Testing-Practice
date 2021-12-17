const reverseString = require('../code/reverse-string');

test('Reverse string (Example 1)', () => {
    expect(reverseString('string')).toBe('gnirts');
})

test('Reverse string (Example 2)', () => {
    expect(reverseString('the quick brown fox')).toBe('xof nworb kciuq eht');
})

test('Reverse string (Example 3)', () => {
    expect(reverseString('A')).toBe('A');
})

test('Reverse string (Example 3)', () => {
    expect(reverseString('123')).toBe('321');
})