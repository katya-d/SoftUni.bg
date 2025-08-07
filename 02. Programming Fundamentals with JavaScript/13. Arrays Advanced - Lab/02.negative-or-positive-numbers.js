function solve(arr) {
    let orderedArray = [];

    for(let i = 0; i < arr.length; i++) {
        let numOfArr = Number(arr[i]);

        if(numOfArr < 0) {
            orderedArray.unshift(numOfArr);
        }else {
            orderedArray.push(numOfArr);
        }
    }

    let column = orderedArray.join(`\n`);
    return column;
}

console.log(solve(['7', '-2', '8', '9']));
console.log('--------------');
console.log(solve(['3', '-2', '0', '-1']));