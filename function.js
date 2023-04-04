const capitalize = (string) => {
    if(typeof string !== 'string'){
        throw new Error('Input must be a string');
    }
    if(string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;

