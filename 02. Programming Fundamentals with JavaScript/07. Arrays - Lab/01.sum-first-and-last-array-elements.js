function solve(arr) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);
    let result = firstElement + lastElement;

    console.log(result);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);