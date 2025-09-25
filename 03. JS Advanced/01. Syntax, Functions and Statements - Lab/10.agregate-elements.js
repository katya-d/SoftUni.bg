function agregateElements(input) {
  //Calculate Elements
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    sum += num;
  }

  //Inverse values calculation
  let newInput = input.map((x) => 1 / x);

  let invertedSum = 0;

  for (let j = 0; j < newInput.length; j++) {
    let num = Number(newInput[j]);

    invertedSum += num;
  }

  //Concatenate string representation of Numbers
  stringNumbers = "";

  for (let k = 0; k < input.length; k++) {
    let numToString = input[k] + "";
    stringNumbers += numToString;
  }

  console.log(sum);
  console.log(invertedSum);
  console.log(stringNumbers);
}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);
