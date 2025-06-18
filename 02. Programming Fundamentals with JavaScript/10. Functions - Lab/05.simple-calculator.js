function calculator(x, y, operator) {
    let result = 0;

    function multiply(numOne, numTwo) {
        result = numOne * numTwo;
        return result;
    }

    function divide(numOne, numTwo) {
        result = numOne / numTwo;
        return result;
    }

    function add(numOne, numTwo) {
        result = numOne + numTwo;
        return result;
    }

    function subtract(numOne, numTwo) {
        result = numOne - numTwo;
        return result;
    }

    switch (operator) {
        case "multiply": return multiply(x, y);
        case "divide": return divide(x, y);
        case "add": return add(x, y);
        case "subtract": return subtract(x, y);
    }
}

console.log(calculator(5, 5, "multiply"));
console.log(calculator(40, 8, "divide"));
console.log(calculator(12, 19, "add"));
console.log(calculator(50, 13, "subtract"));
