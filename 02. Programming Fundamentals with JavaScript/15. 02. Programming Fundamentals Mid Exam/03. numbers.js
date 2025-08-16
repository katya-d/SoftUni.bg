function numbers(stringData) {
    let input = stringData.split(' ').map(Number);

    let sum = 0;

    for(num of input) {
        sum += num;
    }

    let inputLength = input.length;

    let averageNumber = sum / inputLength;

    let greaterNumbers = [];

    for(num of input) {
        if(num > averageNumber) {
            greaterNumbers.push(num);
        }
    }

    greaterNumbers = greaterNumbers.sort((a, b) => b - a);

    let topFiveNumbers = greaterNumbers.slice(0, 5)
    
    if(topFiveNumbers.length > 0) {
        console.log(topFiveNumbers.join(' '));
    }else {
        console.log('No');
        
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');