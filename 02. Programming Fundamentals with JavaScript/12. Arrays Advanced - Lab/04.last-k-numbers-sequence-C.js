function solve(n, k) {
    let arr = [1];
    let sum = 0;

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let currentSum = 0;
        for (let j = start; j < i; j++) {
            currentSum += arr[j];
        }
        arr.push(currentSum);
    }

    console.log(arr.join(' '));
}

solve(6, 3);
solve(8, 2);