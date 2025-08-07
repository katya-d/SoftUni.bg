function palindromeInteger(input) {
  let reversedString = "";

  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    let numAsString = String(num);

    for (let j = numAsString.length - 1; j >= 0; j--) {
      reversedString += numAsString[j];
    }

    let reversedNumber = Number(reversedString);

    if (num === reversedNumber) {
      console.log(true);
    } else {
      console.log(false);
    }

    reversedString = "";
    reversedNumber = 0;
  }
}

palindromeInteger([123, 323, 421, 121]);
console.log('--------');
palindromeInteger([32, 2, 232, 1010]);
