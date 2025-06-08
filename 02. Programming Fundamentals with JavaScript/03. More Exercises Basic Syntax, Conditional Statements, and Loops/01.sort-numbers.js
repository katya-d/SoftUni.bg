function sortNumbers(num1, num2, num3) {
    let numsArray = [];

    numsArray.push(num1, num2, num3);
    numsArray.sort().reverse();

    for(let i = 0; i < numsArray.length; i++) {
        console.log(numsArray[i]);
    }
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);