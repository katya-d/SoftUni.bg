function smallestNumber(numOne, numTwo, numThree) {
    function smallestOfTwoNumbers(firstNum, secondNum) {
        if(firstNum <= secondNum) {
            return firstNum;
        }else {
            return secondNum;
        }
    }

    let temporaryResult = smallestOfTwoNumbers(numOne, numTwo);

    let endResult = smallestOfTwoNumbers(temporaryResult, numThree)
    
    console.log(endResult);
}

smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);
smallestNumber(25, 21, 4);