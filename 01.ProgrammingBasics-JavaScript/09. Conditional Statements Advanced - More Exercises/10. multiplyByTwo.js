function multiplyByTwo(array) {
  let multiply = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) >= 0) {
      multiply = Number(array[i]) * 2;
      console.log(`Result: ${multiply.toFixed(2)}`);
    } else {
      console.log("Negative number!");
    }
  }
}

multiplyByTwo(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyByTwo(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyByTwo([-123]);
