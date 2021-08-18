module.exports = function reverse (n) {
  let numberStr = n.toString();
  let reverseInt = 0;
  if (numberStr[0] === '-') {
      numberStr = numberStr.slice(1);
  }
  for (let i = 0; i < numberStr.length; i++) {
    switch (numberStr[i]) {
        case '1':
            reverseInt += 1 * (10 ** i);
            break;
        case '2':
            reverseInt += 2 * (10 ** i);
            break;
        case '3':
            reverseInt += 3 * (10 ** i);
            break;
        case '4':
            reverseInt += 4 * (10 ** i);
            break;
        case '5':
            reverseInt += 5 * (10 ** i);
            break;
        case '6':
            reverseInt += 6 * (10 ** i);
            break;
        case '7':
            reverseInt += 7 * (10 ** i);
            break;
        case '8':
            reverseInt += 8 * (10 ** i);
            break;
        case '9':
            reverseInt += 9 * (10 ** i);
            break;
        }
  }
  return reverseInt;
}
