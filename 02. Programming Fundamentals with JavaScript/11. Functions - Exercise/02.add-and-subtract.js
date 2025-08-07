function addAndSubtract(firstNum, secondNum, thirdNum) {
    function sum(numOne, numTwo) {
        let result = numOne + numTwo;

        return result;
    }

    let resultOfSum = sum(firstNum, secondNum);

    function subtract(resultOfSum, num) {
        let result = resultOfSum - num;
        
        return result;
    }

    let endResult = subtract(resultOfSum, thirdNum);

    console.log(endResult)
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
