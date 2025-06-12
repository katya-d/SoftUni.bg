function primeNumberChecker(num) {
    if(num % 2 === 0 && num % num === 1) {
        console.log(true)
    }else {
        console.log(false);
        
    }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);