const reverseString = require('./function');

describe('reverseString', () => {
    it('should reverse a string correctly', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('racecar')).toBe('racecar');
      expect(reverseString('12345')).toBe('54321');
    });
  });
