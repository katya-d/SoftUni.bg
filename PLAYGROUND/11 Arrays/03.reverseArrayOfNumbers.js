function reverseArrayOfNumbers(n, arr) {
    let newArr = [];

    for(let i = 0; i < n; i++) {
        let elementFromArr = arr[i];

        newArr.push(elementFromArr); 
    }

    newArr = newArr.reverse().join(' ');

    console.log(newArr);
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);
