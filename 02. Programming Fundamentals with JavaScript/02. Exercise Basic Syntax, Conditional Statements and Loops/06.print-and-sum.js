function printAndSum(startNum, endNum) {
    let result = "";
    let sum = 0;

    for(let i = startNum; i <= endNum; i++) {
        result += i + " ";
        sum += i;
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);