function cookingByNumbers(
  inputNumber,
  operationOne,
  operationTwo,
  operationThree,
  operationFour,
  operationFive
) {
  let num = Number(inputNumber);
  let operationsArray = [];
  operationsArray.push(
    operationOne,
    operationTwo,
    operationThree,
    operationFour,
    operationFive
  );

  for (let i = 0; i < operationsArray.length; i++) {
    let operation = operationsArray[i];

    if (operation === "chop") {
      num = num / 2;
      console.log(num);
    } else if (operation === "dice") {
      num = Math.sqrt(num);
      console.log(num);
    } else if (operation === "spice") {
      num = num + 1;
      console.log(num);
    } else if (operation === "bake") {
      num = num * 3;
      console.log(num);
    } else if (operation === "fillet") {
      num = num - num * 0.2;
      console.log(num);
    }
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("-----------------");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
