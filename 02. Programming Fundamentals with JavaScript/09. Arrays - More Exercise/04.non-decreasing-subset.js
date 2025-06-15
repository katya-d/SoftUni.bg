function solve(arr) {
    let currentNum = 0;
    let newArr = [arr[0]];
    let maxNum = newArr[0];

    for(let i = 1; i < arr.length; i++) {
        currentNum = arr[i];
        maxNum = newArr[newArr.length - 1];
        if(currentNum >= maxNum) {
            newArr.push(currentNum);
        } 
    }
    console.log(newArr.join(' '));
}

solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([ 1, 2, 3, 4]);
solve([ 20, 3, 2, 15, 6, 1]);