function histogram(input) {
    let numberNumbers = input[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= numberNumbers; i++) {
        let arrayNum = Number(input[i]);

        if(arrayNum < 200) {
            p1 += 1;
        } else if(arrayNum >= 200 && arrayNum <= 399) {
            p2 += 1;
        } else if(arrayNum >= 400 && arrayNum <= 599) {
            p3 += 1;
        } else if(arrayNum >= 600 && arrayNum <= 799) {
            p4 += 1;
        } else if(arrayNum >= 800) {
            p5 += 1;
        }
    }

    let p1Percent = p1 / numberNumbers * 100;
    let p2Percent = p2 / numberNumbers * 100;
    let p3Percent = p3 / numberNumbers * 100;
    let p4Percent = p4 / numberNumbers * 100;
    let p5Percent = p5 / numberNumbers * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

// histogram([3, 1, 2, 999]);
// histogram([7, 800, 801, 250, 199, 399, 599, 799]);
// histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
// histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);
