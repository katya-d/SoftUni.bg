function oddNumbers(arr) {
    let oddNumbersArray = arr
        .filter((numONe, index) => index % 2 === 1)
        .map(num => num * 2)
        .reverse()
        .join(' ');

    console.log(oddNumbersArray)
}

oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);