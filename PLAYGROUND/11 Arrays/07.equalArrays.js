function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let diffIndex = undefined;

    let arraysLength = firstArray.length;

    for(let i = 0; i < arraysLength; i++) {
        let firstElement = Number(firstArray[i]);
        let secondElement = Number(secondArray[i]);

        if(firstElement === secondElement) {
            sum += firstElement;
        } else {
            diffIndex = i;
            break;
        }
    }

    if(diffIndex === undefined) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else {
        console.log( `Arrays are not identical. Found difference at ${diffIndex} index`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);