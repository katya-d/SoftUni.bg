function gameOfIntervals(input) {
    let movesNumbers = Number(input[0]);

    let result = 0;
    let calculation = 0;

    let firstInterval = 0;
    let secondInterval = 0;
    let thirdInterval = 0;
    let fourthInterval = 0;
    let fifthInterval = 0;
    let invalidNumbers = 0;

    for(let i = 1; i <= movesNumbers; i++) {
        let intervalNumber = Number(input[i]);

        if(intervalNumber >= 0 && intervalNumber <= 9) {
            calculation = intervalNumber * 0.2;
            result += calculation;
            firstInterval++;

        }else if(intervalNumber >= 10 && intervalNumber <= 19) {
            calculation = intervalNumber * 0.3;
            result += calculation;
            secondInterval++;

        }else if(intervalNumber >= 20 && intervalNumber <= 29) {
            calculation = intervalNumber * 0.4;
            result += calculation;
            thirdInterval++;

        }else if(intervalNumber >= 30 && intervalNumber <= 39) {
            result += 50;
            fourthInterval++;

        }else if(intervalNumber >= 40 && intervalNumber <= 50) {
            result += 100;
            fifthInterval++;

        }else if(intervalNumber < 0 || intervalNumber > 50) {
            result /= 2;
            invalidNumbers++;
        }
    }

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(firstInterval / movesNumbers * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(secondInterval / movesNumbers * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(thirdInterval / movesNumbers * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(fourthInterval / movesNumbers * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fifthInterval / movesNumbers * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers / movesNumbers * 100).toFixed(2)}%`);
}

gameOfIntervals(["10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20"]);
