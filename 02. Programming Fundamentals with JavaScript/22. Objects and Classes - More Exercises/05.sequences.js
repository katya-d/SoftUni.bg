function sequences(input) {
  let objectOfNumbers = {};

  for (let array of input) {
    let converted = JSON.parse(array);

    let sortedArray = [...converted].sort((a, b) => a - b);
    let arr = JSON.stringify(sortedArray);
    objectOfNumbers[arr] = converted;
  }

  let arrays = Object.values(objectOfNumbers);

  arrays.sort((a, b) => a.length - b.length);
  for (let arr of arrays) {
    let sortedDesc = [...arr].sort((a, b) => b - a);
    console.log(`[${sortedDesc.join(", ")}]`);
  }
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
console.log("----------");
sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
