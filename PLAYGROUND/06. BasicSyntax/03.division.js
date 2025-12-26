function division(number) {
    let isDivisible;

    if(number % 10 === 0) {
        isDivisible = Number(10);
    }else if(number % 7 === 0) {
        isDivisible = Number(7);
    }else if(number % 6 === 0) {
        isDivisible = Number(6);
    }else if(number % 3 === 0) {
        isDivisible = Number(3);
    }else if(number % 2 === 0) {
        isDivisible = Number(2);
    }else {
        isDivisible = 'Not divisible';
    }

    if (typeof(isDivisible) !== "string") {
        console.log(`The number is divisible by ${isDivisible}`);
    }else {
        console.log(`${isDivisible}`);
    }
}

division(30);
division(15);
division(12);
division(1643);