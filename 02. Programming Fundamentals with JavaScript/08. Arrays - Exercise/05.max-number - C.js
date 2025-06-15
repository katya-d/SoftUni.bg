function maxNumber(input) {
    let newArr = [];
    for(let i = 0; i < input.length; i++) {
        let arrValue = input[i];
        let isMax = true;
        for(let j = i + 1; j < input.length; j++) {
            if(arrValue <= input[j]) {
                isMax = false;
                break;
            }
        }
        if(isMax) {
            newArr.push(arrValue);
        }
    }

    console.log(newArr.join(" "));
    
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);