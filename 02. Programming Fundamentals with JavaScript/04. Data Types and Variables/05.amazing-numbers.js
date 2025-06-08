function amazingNumbers(num) {
    let numAsString = String(num);
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++) {
        let charAsNum = Number(numAsString[i]);

        sum += charAsNum;
    }

    let sumAsString = String(sum);

    if(sumAsString.includes(9) === true) {
        console.log(`${num} Amazing? True`);
    }else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);