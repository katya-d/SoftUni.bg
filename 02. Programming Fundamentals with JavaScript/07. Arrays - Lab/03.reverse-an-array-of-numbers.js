function reverseArray(reverseNumber, startArray) {
    let newArray = [];
    let reversedArray = [];
    for(let i = 0; i < reverseNumber; i++) {
        newArray.push(startArray[i]);
    }

    for(let j = newArray.length - 1; j >= 0; j--) {
        reversedArray.push(newArray[j]);
    }
    let arrayString = reversedArray.join(" ");

    console.log(arrayString);
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);