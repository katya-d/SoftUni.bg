function integerAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;

    let isIntegerOrFloat = sum % 1 === 0;

    if(isIntegerOrFloat === true) {
        console.log(`${sum} - Integer`);
    }else {
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);