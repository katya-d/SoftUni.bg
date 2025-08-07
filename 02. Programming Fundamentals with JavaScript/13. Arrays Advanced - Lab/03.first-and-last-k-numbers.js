function solve(input) {
    input = input.map(Number);
    let k = input.shift();

    let firstNumbers = input.slice(0, k);
    let lastNumber = input.slice(input.length - k);
 

    console.log(firstNumbers.join(' '));
    console.log(lastNumber.join(' '));
}

solve([2, 7, 8, 9]);
console.log('--------------');
solve([3, 6, 7, 8, 9]);