function factorialDivision(numOne, numTwo) {

    let firstFactorial = 1;
    let secondFactorial = 1;

    for(let i = numOne; i >= 1; i--) {
        firstFactorial *=  i;
    }

    for(let j = numTwo; j >= 1; j--) {
        secondFactorial *=  j;
    }

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
