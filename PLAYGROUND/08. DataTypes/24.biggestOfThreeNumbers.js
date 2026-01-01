function biggestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let biggestNumber = undefined;

    if(firstNum >= secondNum && firstNum >= thirdNum) {
        biggestNumber = firstNum;
    }else if(secondNum >= firstNum && secondNum >= thirdNum) {
        biggestNumber = secondNum;
    }else {
        biggestNumber = thirdNum;
    }

    console.log(biggestNumber);
}

biggestOfThreeNumbers(-2, 7, 3);
console.log("-----------------------");
biggestOfThreeNumbers(130, 5, 99);
console.log("-----------------------");
biggestOfThreeNumbers(43, 43.2, 43.1);
console.log("-----------------------");
biggestOfThreeNumbers(2, 2, 2);
