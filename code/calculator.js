const calculator = {
  add: function add(a, b) {
    let ans = a + b;
    return roundToTwo(ans);
  },
  substract: function substract(a, b) {
    let ans = a - b;
    return roundToTwo(ans);
  },
  divide: function divide(a, b) {
    if (b === 0) {
      return "undefined";
    } else {
      let ans = a / b;
      return roundToTwo(ans);
    }
  },
  multiply: function multiply(a, b) {
    let ans = a * b;
    return roundToTwo(ans);
  },
};

function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
}

module.exports = calculator;
