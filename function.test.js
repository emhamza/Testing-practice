const stringLength = require('./function');

const string1 = "hello";
const string2 = "";
const string3 = "This is a test string!";
const string4 = "a";
const string5 = "1234567890";
const string6 = "waytoolongstring";


describe('stringLength', () => {
    // Test valid input strings
    it('should return the correct length for a valid string', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('a')).toBe(1);
      expect(stringLength('1234567890')).toBe(10);
    });
  
    // Test invalid input strings
    it('should throw an error for an empty string', () => {
      expect(() => {
        stringLength('');
      }).toThrow('Input string must be between 1 and 10 characters long');
    });
  
    it('should throw an error for a string that is too long', () => {
      expect(() => {
        stringLength('waytoolongstring');
      }).toThrow('Input string must be between 1 and 10 characters long');
    });
  });

// it('stringLength returns correct length of string', () => {
//     expect(stringLength(string1)).toBe(5);
//     expect(stringLength(string4)).toBe(1);
//     expect(stringLength(string5)).toBe(10);

// })

// it('should throw an error for an empty string', () => {
//     expect(() => {
//         stringLength('');
//     }).toThrow('Input string must be between 1 and 10 characters long');
// });

// it('it should thorw an error  for a string that is too long', () => {
//     expect(() => {
//         stringLength('waytoolongstring');
//     }).toThrow('Input string must be between 1 and 10 characters long');
// });