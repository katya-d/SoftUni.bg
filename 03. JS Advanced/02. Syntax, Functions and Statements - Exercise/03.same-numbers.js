function sameNumbers(input) {
  let numToString = String(input);

  let prevChar = numToString.charAt(0);
  let sum = Number(prevChar);
  let secondVariant = Number(prevChar);

  for (let i = 1; i < numToString.length; i++) {
    let nextChar = numToString.charAt(i);

    if (prevChar === nextChar) {
      sum += Number(nextChar);
    } else {
      console.log(false);
      for (let j = 1; j < numToString.length; j++) {
        let charNum = numToString.charAt(j);
        secondVariant += Number(charNum);
      }
      return secondVariant;
    }
  }

  console.log(true);
  return sum;
}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));
