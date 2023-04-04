const stringLength = (string) => {
    const length = string.length;
    if(length < 1 || length > 10){
        throw new Error('Input string must be between 1 and 10 characters long');
  }
  return length;
}

module.exports = stringLength;

