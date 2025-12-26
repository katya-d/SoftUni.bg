function englishNames(num) {
    let numToString = String(num);

    let arr = numToString.split('');
    let lastDigit = Number(arr[arr.length - 1]);

    let englishName = '';

    switch(lastDigit) {
        case 1: lastDigit = 'one';
        break;
        case 2: lastDigit = 'two';
        break;
        case 3: lastDigit = 'three';
        break;
        case 4: lastDigit = 'four';
        break;
        case 5: lastDigit = 'five';
        break;
        case 6: lastDigit = 'six';
        break;
        case 7: lastDigit = 'seven';
        break;
        case 8: lastDigit = 'eight';
        break;
        case 9: lastDigit = 'nine';
        break;
        case 0: lastDigit = 'zero';
        break;
    }

    return lastDigit;
}

console.log(englishNames(512));
console.log(englishNames(1));
console.log(englishNames(1643));