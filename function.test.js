const capitalize = require('./function');

describe('capitalize', () => {
    it('capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('hamza')).toBe('Hamza');
    });
    it('return an empty string if the input is empty', () => {
        expect(capitalize('')).toBe('');
    });
    it('retrun the input if the first letters is already capitalized', () => {
        expect(capitalize('Hello')).toBe('Hello');
        expect(capitalize('Hamza')).toBe('Hamza');
    });
    it('throw an error if the input is not a sting', () => {
        expect(() => capitalize(null)).toThrow();
        expect(() => capitalize(undefined)).toThrow();
        expect(() => capitalize(123)).toThrow();
        expect(() => capitalize({})).toThrow();
        expect(() => capitalize([])).toThrow();
    });
});
