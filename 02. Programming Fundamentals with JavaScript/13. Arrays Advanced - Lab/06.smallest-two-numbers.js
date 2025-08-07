function solve(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let firstEl = sortedArray[0];
    let secondEl = sortedArray[1];

    console.log(`${firstEl} ${secondEl}`);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3])