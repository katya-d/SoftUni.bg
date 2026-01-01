function latinLetters(n) {
  let nToNum = Number(n);

  for (let i = 0; i < nToNum; i++) {
    let aLetter = 97;

    let firstLetter = aLetter + i;

    let convertedFirstLetter = String.fromCharCode(firstLetter);

    for (let j = 0; j < nToNum; j++) {
      let secondLetter = aLetter + j;

      let convertSecondLetter = String.fromCharCode(secondLetter);

      for (let k = 0; k < nToNum; k++) {
        let thirdLetter = aLetter + k;

        let convertedThirdLetter = String.fromCharCode(thirdLetter);

        let endResult =
          convertedFirstLetter + convertSecondLetter + convertedThirdLetter;

        console.log(endResult);
      }
    }
  }
}

latinLetters("3");
console.log("----------");
latinLetters(2);
