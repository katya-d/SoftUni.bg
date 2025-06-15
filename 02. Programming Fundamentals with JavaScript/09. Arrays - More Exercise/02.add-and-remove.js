function addAndRemove(input) {
    let initialNumber = 1;
    let newArr = [];
    for(let i = 0; i < input.length; i++) {
        let command = input[i];

        if(command === 'add') {
            initialNumber += i;
            newArr.push(initialNumber);
        }else if(command === 'remove') {
            newArr.pop();
        }

        initialNumber = 1;
    }

    if(newArr[0] === undefined) {
        console.log('Empty');
    }else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);