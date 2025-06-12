function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let notEqual = false;
    let count = 0;

    for(let i = 0; i < firstArray.length; i++) {
        let toNumber = Number(firstArray[i]);
        let toNumberTwo = Number(secondArray[i]);

        if(toNumber === toNumberTwo) {
            sum += toNumber;
        }else {
            notEqual = true;
            break;
        }
        count++;
    }

        if(notEqual === false) {
            console.log(`Arrays are identical. Sum: ${sum}`);
        }else {
            console.log(`Arrays are not identical. Found difference at ${count} index`);
            
        }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
