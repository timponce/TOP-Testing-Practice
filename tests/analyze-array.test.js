const analyzeArray = require('../code/analyze-array');

test('Analyze Array Test (Example 1)', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})

test('Analyze Array Test (Example 2)', () => {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
      });
})

test('Analyze Array Test (Example 3)', () => {
    expect(analyzeArray([-1,2,3,4])).toEqual({
        average: 2,
        min: -1,
        max: 4,
        length: 4
      });
})

test('Analyze Array Test (Example 4)', () => {
    expect(analyzeArray([2,2,2,2,2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 5
      });
})

test('Analyze Array Test (Example 5)', () => {
    expect(analyzeArray([])).toBeUndefined();
})

test('Analyze Array Test (Example 6)', () => {
    expect(analyzeArray([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
      });
})

// test('Analyze Array Test (Example 7)'), () => {
//     expect(analyzeArray('')).toBe('');
// }

// test('Analyze Array Test (Example 8)'), () => {
//     expect(analyzeArray('')).toBe('');
// }

// test('Analyze Array Test (Example 9)'), () => {
//     expect(analyzeArray('')).toBe('');
// }

// test('Analyze Array Test (Example 10)'), () => {
//     expect(analyzeArray('')).toBe('');
// }