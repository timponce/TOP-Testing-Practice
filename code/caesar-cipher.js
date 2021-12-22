let alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

// function caesarCipher(str, shift = 1) {
//   let strArr = str.split("");
//   let numArr = strArr.map(function(e) {
//     for (const letter in alphabet) {
//       if (e === letter) {
//         return e = alphabet[letter];
//       } else {
//         return e;
//       }
//     }
//   });
//   let numArrIncremented = numArr.map(function(e) {
//     if (typeof e === "number") {
//       return e + shift;
//     } else {
//       return e;
//     }
//   });
//   let numArrayIncdWrapd = numArrIncremented.map(function(e) {
//     if (e > 26) {
//       return e % 26;
//     } else {
//       return e;
//     }
//   });
//   let cipheredArr = numArrayIncdWrapd.map(function(e) {
//     for (const letter in alphabet) {
//       if (e === alphabet[letter]) {
//         return (e = letter);
//       } else {
//         return e;
//       }
//     }
//   });
//   let cipheredStr = cipheredArr.join("");
//   return cipheredStr;
// }

function caesarCipher(str, shift = 1) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (const letter in alphabet) {
      if (strArr[i] === letter) {
        strArr[i] = alphabet[letter];
      }
    }
  }
  let numArr = strArr;
  let numArrIncremented = [];
  for (let i = 0; i < numArr.length; i++) {
    if (typeof numArr[i] === "number") {
      numArrIncremented.push(numArr[i] + shift);
    } else {
      numArrIncremented.push(numArr[i]);
    }
  }
  for (let i = 0; i < numArrIncremented.length; i++) {
    if (numArrIncremented[i] > 26) {
      let wrappedNum = numArrIncremented[i] - 26;
      numArrIncremented.splice(i, 1, wrappedNum);
    }
  }
  for (let i = 0; i < numArrIncremented.length; i++) {
    for (const letter in alphabet) {
      if (numArrIncremented[i] === +alphabet[letter]) {
        numArrIncremented[i] = letter;
      }
    }
  }
  let cipheredStr = numArrIncremented.join("");
  return cipheredStr;
}

module.exports = caesarCipher;