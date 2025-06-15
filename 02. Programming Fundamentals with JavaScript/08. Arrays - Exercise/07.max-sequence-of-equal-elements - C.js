function solve(input) {
    let maxSequence = [];
    let currentSequence = [input[0]];

    for(let i = 1; i < input.length; i++) {
        let currentNum = input[i];
        let prevNum = input[i - 1];

        if(prevNum === currentNum) {
            currentSequence.push(currentNum);
        } else {
            if(currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = [currentNum];
        }
    }

    if(currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    console.log(maxSequence.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);