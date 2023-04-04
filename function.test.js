const Calculator = require('./function');

describe('calcultor', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds a positive and a negative number', () => {
        expect(calculator.add(2, -3)).toBe(-1);
        });

        test('adds two negative numbers', () => {
        expect(calculator.add(-2, -3)).toBe(-5);
        });
    });
    describe('subtract', () => {
        test('subtract two positive numbers', () => {
          expect(calculator.subtract(5, 2)).toBe(3);
        });
    
        test('subtract a positive and a negative number', () => {
          expect(calculator.subtract(5, -2)).toBe(7);
        });
    
        test('subtract two negative numbers', () => {
          expect(calculator.subtract(-2, -3)).toBe(1);
        });
      });
    describe('multiply', () => {
        test('subtract two positive numbers', () => {
          expect(calculator.multiply(5, 2)).toBe(10);
        });
    
        test('multiply a positive and a negative number', () => {
          expect(calculator.multiply(5, -2)).toBe(-10);
        });
    
        test('multiply two negative numbers', () => {
          expect(calculator.multiply(-2, -3)).toBe(6);
        });
      });
    describe('divide', () => {
        test('divide two positive numbers', () => {
          expect(calculator.divide(10, 2)).toBe(5);
        });
    
        test('divide a positive and a negative number', () => {
          expect(calculator.divide(10, -2)).toBe(-5);
        });
    
        test('divide two negative numbers', () => {
          expect(calculator.divide(-10, -2)).toBe(5);
        });
    });
});
