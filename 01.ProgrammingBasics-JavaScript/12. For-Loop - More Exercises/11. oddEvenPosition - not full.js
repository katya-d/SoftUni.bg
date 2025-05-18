function oddEvenPosition(input) {
  let oddSum = 0;
  let evenSum = 0;

  let evenMinNumber = Number.MAX_SAFE_INTEGER;
  let evenMaxNumber = Number.MIN_SAFE_INTEGER;

  let oddMinNumber = Number.MAX_SAFE_INTEGER;
  let oddMaxNumber = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);

    if (num % 2 === 0) {
      evenSum += num;
      if (num <= evenMinNumber) {
        evenMinNumber = num;
      } else if (evenMinNumber === Number.MAX_SAFE_INTEGER) {
        evenMinNumber = "No";
      }

      if (num >= evenMaxNumber) {
        evenMaxNumber = num;
      } else if (evenMaxNumber === Number.MIN_SAFE_INTEGER) {
        evenMaxNumber = "No";
      }
    } else {
      oddSum += num;

      if (num <= oddMinNumber) {
        oddMinNumber = num;
      } else if (oddMinNumber === Number.MAX_SAFE_INTEGER) {
        oddMinNumber = "No";
      }

      if (num >= oddMaxNumber) {
        oddMaxNumber = num;
      } else if (oddMaxNumber === Number.MIN_SAFE_INTEGER) {
        oddMaxNumber = "No";
      }
    }
  }

  console.log(`OddSum=${oddSum.toFixed(2)}`);

  if (oddMinNumber !== "No") {
    console.log(`OddMin=${oddMinNumber.toFixed(2)}`);
  } else {
    console.log(`OddMin=${oddMinNumber}`);
  }

  if (oddMaxNumber !== "No") {
    console.log(`OddMax=${oddMaxNumber.toFixed(2)}`);
  } else {
    console.log(`OddMax=${oddMaxNumber}`);
  }

  console.log(`EvenSum=${evenSum.toFixed(2)}`);

  if (evenMinNumber !== "No") {
    console.log(`EvenMin=${evenMinNumber.toFixed(2)}`);
  } else {
    console.log(`EvenMin=${evenMinNumber}`);
  }

  if (evenMaxNumber !== "No") {
    console.log(`EvenMax=${evenMaxNumber.toFixed(2)}`);
  } else {
    console.log(`EvenMax=${evenMaxNumber}`);
  }
}

oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
