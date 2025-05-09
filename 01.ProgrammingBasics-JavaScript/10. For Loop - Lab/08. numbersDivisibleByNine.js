function numbersDivisibleByNine(startNum, endNum) {
    let sum = 0;

    for(let i = startNum; i <= endNum; i++) {
        if(i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for(let i = startNum; i <= endNum; i++) {
        if(i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleByNine(100, 200);