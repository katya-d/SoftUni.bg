function sumDigits(num) {
    let sum = 0;
    let numToString = String(num);

    for(let i = 0; i < numToString.length; i++) {
        let digit = Number(numToString[i]);
        sum += digit;
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);