function mergeArrays(arrOne, arrTwo) {
  let thirdArray = [];

  for (let i = 0; i < arrOne.length; i++) {
    let arrOneValue = arrOne[i];
    let arrTwoValue = arrTwo[i];

    if (i % 2 === 0) {
      let sumOfTwoValues = Number(arrOneValue) + Number(arrTwoValue);
      thirdArray.push(sumOfTwoValues);
    } else {
      let concatOfTwoValues = arrOneValue + "" + arrTwoValue;
      thirdArray.push(concatOfTwoValues);
    }
  }

  let result = thirdArray.join(" - ");
  console.log(result);
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
console.log("-------------");
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
