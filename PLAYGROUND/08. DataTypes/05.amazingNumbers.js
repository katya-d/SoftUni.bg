function amazingNumbers(num) {
    let numAsString = '' + num;
    let sum = 0;
    let sumAsString = '';

    for(let i = 0; i < numAsString.length; i++) {
        let newNumber = Number(numAsString[i]);

        sum += newNumber;
    }

    sumAsString = String(sum);

    if(sumAsString.includes('9')) {
        console.log(`${num} Amazing? True`);
    }else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);