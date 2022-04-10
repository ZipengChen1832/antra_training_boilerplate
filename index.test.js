const calc = require('./src/components/Calc');

test('adds 1 + 2 to equal 3', () => {
    expect(calc(1, 2)).toBe(3);
    expect(calc(5, 5)).toBe(10);
    expect(calc(102, -2)).toBe(100);
});