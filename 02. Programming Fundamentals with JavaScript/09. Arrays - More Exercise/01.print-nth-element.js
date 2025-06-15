function print(input) {
    let step = Number(input[input.length - 1]);
    let printedStep = [];
    let index = 0;

    while(index < input.length - 1) {
        printedStep.push(input[index]);
        index += step;
    }

    console.log(printedStep.join(" "));
}

print(['5', '20', '31', '4', '20', '2']);
print(['dsa', 'asd', 'test', 'test', '2']);
print(['1', '2', '3', '4', '5', '6']);