function sumDigits(digits) {
    let digitsToString = String(digits).split('');
    let digitsToNum = digitsToString.map(x => Number(x));

    let sum = 0;

    for(let i = 0; i < digitsToNum.length; i++) {
        let newNum = digitsToNum[i];

        sum += newNum;
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);