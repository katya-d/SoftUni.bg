function bombNumbers(numSequence, specialBombNumber) {
  let specialNumber = Number(specialBombNumber[0]);
  let bombPower = Number(specialBombNumber[1]);

  while (numSequence.includes(specialNumber)) {
    let indexOfBomb = numSequence.indexOf(specialNumber);

    let leftIndex = Math.max(0, indexOfBomb - bombPower);
    let rightIndex = Math.min(numSequence.length - 1, indexOfBomb + bombPower);

    numSequence.splice(leftIndex, rightIndex - leftIndex + 1);
  }

  let sum = numSequence.reduce((a, b) => a + b, 0);
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
