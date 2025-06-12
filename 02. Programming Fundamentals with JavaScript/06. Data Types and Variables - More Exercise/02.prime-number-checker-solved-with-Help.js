function primeNumberChecker(num) {
    if (num <= 1) {
        console.log(false);
        return;
    }
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);