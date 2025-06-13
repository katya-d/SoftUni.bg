function commonElements(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    let arrOneValue = arrOne[i];

    for (let j = 0; j < arrTwo.length; j++) {
      let arrTwoValue = arrTwo[j];

      if (arrOneValue === arrTwoValue) {
        console.log(arrOneValue);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
