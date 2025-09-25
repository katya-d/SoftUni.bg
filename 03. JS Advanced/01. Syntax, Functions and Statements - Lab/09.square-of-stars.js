function squareOfStars(starsNumber) {
  if (starsNumber === undefined) {
    starsNumber = 5;
  }
  let str = "";

  for (let row = 1; row <= starsNumber; row++) {
    for (let col = 1; col <= starsNumber; col++) {
      str += "* ";
    }
    str += " \n";
  }
  console.log(str.trim());
}

squareOfStars();
console.log("------------------");
squareOfStars(1);
console.log("------------------");
squareOfStars(2);
console.log("------------------");
squareOfStars(5);
console.log("------------------");
squareOfStars(7);
