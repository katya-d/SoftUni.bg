function maxNumber(input) {
  let index = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (input[index] !== "Stop") {
    let number = Number(input[index]);

    if (number > maxNumber) {
      maxNumber = number;
    }

    index++;
  }

  console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);
