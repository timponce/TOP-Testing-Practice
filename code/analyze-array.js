function analyzeArray(array) {
    const object = {}

    if (array.length < 1 || array == undefined) {
        return;
    }

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    object.average = (array.reduce(reducer)) / array.length;
    const sortedArray = array.sort((a,b) => a - b);
    object.min = sortedArray[0];
    object.max = sortedArray[sortedArray.length - 1];
    object.length = array.length;
    return object;
}

module.exports = analyzeArray;