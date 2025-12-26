function printAndSum(start, end) {
    let sum = 0;
    let rowWithNumbers = '';
    for(let i = start; i <= end; i++) {
        rowWithNumbers += i + ' ';
        sum += i;
    }

    console.log(rowWithNumbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);