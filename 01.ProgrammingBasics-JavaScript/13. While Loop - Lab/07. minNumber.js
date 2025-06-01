function minNumber(input) {
  let index = 0;
  let minNum = Number.MAX_SAFE_INTEGER;

  while (input[index] !== "Stop") {
    let num = Number(input[index]);

    if (num <= minNum) {
      minNum = num;
    }
    index++;
  }
  console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
