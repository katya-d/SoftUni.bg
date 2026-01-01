function sumElements(input) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    let sum = firstElement + lastElement;

    console.log(sum);
}

sumElements([20, 30, 40]);
sumElements([10, 17, 22, 33]);
sumElements([11, 58, 69]);
