function operationsBetweenNumbers(n1, n2, operator) {
    let operation = 0;
    let result = "";
    let evenOddNumber = "";
    if(n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    }else {
        switch (operator) {
            case "+":
                operation = n1 + n2;

                if(operation % 2 === 0) {
                    evenOddNumber = "even";
                }else {
                    evenOddNumber = "odd";
                }
                result = `${n1} ${operator} ${n2} = ${operation} - ${evenOddNumber}`;
            break;

            case "-":
                operation = n1 - n2;
                
                if(operation % 2 === 0) {
                    evenOddNumber = "even";
                }else {
                    evenOddNumber = "odd";
                }
                result = `${n1} ${operator} ${n2} = ${operation} - ${evenOddNumber}`;
            break;

            case "*":
                operation = n1 * n2;

                if(operation %  2 === 0) {
                    evenOddNumber = "even";
                }else {
                    evenOddNumber = "odd";
                }
                result = `${n1} ${operator} ${n2} = ${operation} - ${evenOddNumber}`;
            break;

            case "/": 
                operation = n1 / n2;
                result = `${n1} / ${n2} = ${operation.toFixed(2)}`; 
            break;

            case "%":
                operation = n1 % n2;
                result = `${n1} % ${n2} = ${operation}`;
        }
        console.log(result);
    }
}

operationsBetweenNumbers(10, 12, "+",);
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(7, 3, "*");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(112, 0, "/");
operationsBetweenNumbers(10, 0, "%");