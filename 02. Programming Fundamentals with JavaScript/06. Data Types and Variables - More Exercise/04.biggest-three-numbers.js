function solve(paramOne, paramTwo, paramThree) {
    let arr = [];
    arr.push(paramOne, paramTwo, paramThree);
    arr.sort(function(a, b) {
        return a - b;
    })

    console.log(arr[2]);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);
solve(2, 2, 2);
