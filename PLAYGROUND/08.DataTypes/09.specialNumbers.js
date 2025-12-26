function specialNumbers(n) {
    let sum = 0;
    let numAsString = '';

    for(let i = 1; i <= n; i++) {
        numAsString = String(i);

        for(let j = 0; j < numAsString.length; j++) {
            let newNumber = Number(numAsString[j]);

            sum += newNumber;
        }

        if(sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`);
            }else {
                console.log(`${i} -> False`);
        }

        sum = 0;
    }
}

specialNumbers(15);
console.log('------------');
specialNumbers(20);
