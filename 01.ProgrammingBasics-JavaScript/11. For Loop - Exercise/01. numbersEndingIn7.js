function numbersEndingInSeven() {
    for(let i = 1; i <= 1000; i++) {
        let num = i;
        if(num % 10 === 7) {
            console.log(num);
        }
    }
}

numbersEndingInSeven();