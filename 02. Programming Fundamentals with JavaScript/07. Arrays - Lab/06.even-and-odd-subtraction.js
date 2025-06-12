function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;

    for(let number of arr) {
        let parsedNumber = Number(number);

        if(parsedNumber % 2 === 0) {
            evenSum += parsedNumber;
        }else {
            oddSum += parsedNumber;
        }
    }

    difference = evenSum - oddSum;
    console.log(difference);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);