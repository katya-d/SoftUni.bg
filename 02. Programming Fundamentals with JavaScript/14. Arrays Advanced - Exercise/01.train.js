function train(input) {
    let wagonsWithPassangers = input
    .shift()
    .split(' ')
    .map(Number);

    let wagonMaxCapacity = Number(input.shift());

    for(let i = 0; i < input.length; i++) {
        let parts = input[i].split(' ');
        let command = parts[0];

        if(command === 'Add') {
            let numOfPeople = Number(parts[1]);
            wagonsWithPassangers.push(numOfPeople);
        }else {
            let numOfPeople = Number(parts[0]);

            for (let j = 0; j < wagonsWithPassangers.length; j++) {
                let wagon = wagonsWithPassangers[j];

                let totalPeople = wagon + numOfPeople;

                if(totalPeople <= wagonMaxCapacity) {
                    wagonsWithPassangers[j] = totalPeople;
                    break;
                }  
            }
        }
    }

    console.log(wagonsWithPassangers.join(' '));

}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
