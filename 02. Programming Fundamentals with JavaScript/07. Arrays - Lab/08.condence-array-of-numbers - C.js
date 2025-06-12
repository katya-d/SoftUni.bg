function solve(input) {
    if(input.length === 1) {
        console.log(input[0]);
        return;
    }

    while (input.length > 1) {
        let newArray = [];
        for (let i = 0; i < input.length - 1; i++) {
            newArray.push(input[i] + input[i + 1]);
        }
        input = newArray;
    }

    console.log(input[0]);
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);