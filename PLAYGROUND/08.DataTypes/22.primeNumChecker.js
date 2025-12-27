function primeNumChecker(num) {
    let isOtherNumbersDivisible = false;

    for(let i = 0; i <= num; i++) {
        if(i / num === 1 && i / 1 === num) {
            isOtherNumbersDivisible = true;
        }

        if (i % 2 === 0 || i % 3 === 0) {
            isOtherNumbersDivisible = false;
        }
    }
    console.log(isOtherNumbersDivisible);
}

primeNumChecker(7);
primeNumChecker(8);
primeNumChecker(81);