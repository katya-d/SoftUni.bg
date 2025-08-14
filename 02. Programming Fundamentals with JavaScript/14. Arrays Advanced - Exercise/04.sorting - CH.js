function sorting(input) {
    let fromSmallToBiggest = input
        .slice()
        .sort((a, b) => a - b);

    let biggestToSmallest = input
        .slice()
        .sort((a, b) => b - a);

    let sortedArray = [];

    for (let i = 0; i < input.length; i++) {
        if (i < biggestToSmallest.length / 2) {
            sortedArray.push(biggestToSmallest[i]);
        }
        if (i < fromSmallToBiggest.length / 2) {
            sortedArray.push(fromSmallToBiggest[i]);
        }
    }

    sortedArray = sortedArray.slice(0, input.length);

    console.log(sortedArray.join(' '));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);