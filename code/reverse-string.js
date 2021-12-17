function reverseString(string) {
    let stringArray = string.split('');
    let stringArrayReversed = stringArray.reverse();
    return stringArrayReversed.join('');
}

module.exports = reverseString;