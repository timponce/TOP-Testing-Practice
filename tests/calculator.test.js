const calculator = require('../code/calculator');

test('Calculator: Add (Example 1)', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('Calculator: Add (Example 2)', () => {
    expect(calculator.add(100, 2)).toBe(102);
})

test('Calculator: Add (Example 3)', () => {
    expect(calculator.add(100, 10)).toBe(110);
})

test('Calculator: Add (Example 4)', () => {
    expect(calculator.add(1, 0)).toBe(1);
})

test('Calculator: Add (Example 5)', () => {
    expect(calculator.add(-1, 2)).toBe(1);
})

test('Calculator: Add (Example 6)', () => {
    expect(calculator.add(1, -2)).toBe(-1);
})

test('Calculator: Add (Example 7)', () => {
    expect(calculator.add(0.1, 0.2)).toBe(0.3);
})

// test('Calculator: Add (Example 8)', () => {
//     expect(add(01, 20)).toBe(21);
// })

test('Calculator: Subtract (Example 1)', () => {
    expect(calculator.substract(1, 2)).toBe(-1);
})

test('Calculator: Subtract (Example 2)', () => {
    expect(calculator.substract(2, 1)).toBe(1);
})

test('Calculator: Subtract (Example 3)', () => {
    expect(calculator.substract(-100, 2)).toBe(-102);
})

test('Calculator: Subtract (Example 4)', () => {
    expect(calculator.substract(1.5, 0.3)).toBe(1.2);
})

test('Calculator: Subtract (Example 5)', () => {
    expect(calculator.substract(0.3, 0.2)).toBe(0.1);
})

// test('Calculator: Subtract (Example 6)', () => {
//     expect(substract(01, 20)).toBe(-19);
// })

test('Calculator: Divide (Example 1)', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
})

test('Calculator: Divide (Example 2)', () => {
    expect(calculator.divide(2, 1)).toBe(2);
})

test('Calculator: Divide (Example 3)', () => {
    expect(calculator.divide(100, 20)).toBe(5);
})

test('Calculator: Divide (Example 4)', () => {
    expect(calculator.divide(5.5, 2)).toBe(2.75);
})

test('Calculator: Divide (Example 5)', () => {
    expect(calculator.divide(1, 0)).toBe('undefined');
})

test('Calculator: Divide (Example 6)', () => {
    expect(calculator.divide(3, 1.5)).toBe(2);
})

test('Calculator: Divide (Example 7)', () => {
    expect(calculator.divide(0.3, 0.1)).toBe(3);
})

test('Calculator: Divide (Example 8)', () => {
    expect(calculator.divide(0, 100)).toBe(0);
})

test('Calculator: Divide (Example 9)', () => {
    expect(calculator.divide(-50, 2)).toBe(-25);
})

test('Calculator: Divide (Example 10)', () => {
    expect(calculator.divide(-50, -2)).toBe(25);
})

test('Calculator: Multiply (Example 1)', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})

test('Calculator: Multiply (Example 2)', () => {
    expect(calculator.multiply(0, 2)).toBe(0);
})

test('Calculator: Multiply (Example 3)', () => {
    expect(calculator.multiply(3, 0)).toBe(0);
})

test('Calculator: Multiply (Example 4)', () => {
    expect(calculator.multiply(0, 0)).toBe(0);
})

test('Calculator: Multiply (Example 5)', () => {
    expect(calculator.multiply(10, 20)).toBe(200);
})

test('Calculator: Multiply (Example 6)', () => {
    expect(calculator.multiply(-10, 2)).toBe(-20);
})

test('Calculator: Multiply (Example 7)', () => {
    expect(calculator.multiply(-10, -2)).toBe(20);
})

test('Calculator: Multiply (Example 8)', () => {
    expect(calculator.multiply(0.1, 0.1)).toBe(0.01);
})

// test('Calculator: Multiply (Example 9)', () => {
//     expect(multiply(100, 02)).toBe(200);
// })