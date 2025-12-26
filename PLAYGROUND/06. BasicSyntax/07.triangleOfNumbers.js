function triangleOfNumbers(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      row += " " + (i + 1);
    }
    console.log(row);
    row = "";
  }
}

triangleOfNumbers(3);
console.log("-------------");
triangleOfNumbers(5);
console.log("-------------");
triangleOfNumbers(6);
