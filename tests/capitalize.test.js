const capitalize = require('../code/capitalize');

test('capitalizes the first character of a string', () => {
    expect(capitalize('string')).toBe('String');
})