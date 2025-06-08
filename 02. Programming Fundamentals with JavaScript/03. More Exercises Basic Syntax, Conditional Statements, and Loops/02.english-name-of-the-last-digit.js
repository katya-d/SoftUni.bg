function solve(num) {
    let numToString = num + "";
    let lastNum = "";
    let numToWord = "";

    for(let i = 0; i < numToString.length; i++) {
        lastNum = numToString[i];
    }

    lastNum = Number(lastNum);

    switch (lastNum) {
        case 1: numToWord = "one"; break;
        case 2: numToWord = "two"; break;
        case 3: numToWord = "three"; break;
        case 4: numToWord = "four"; break;
        case 5: numToWord = "five"; break;
        case 6: numToWord = "six"; break;
        case 7: numToWord = "seven"; break;
        case 8: numToWord = "eight"; break;
        case 9: numToWord = "nine"; break;
        case 0: numToWord = "zero"; break;
    }

    console.log(numToWord);
}

solve(512);
solve(1);
solve(1643);