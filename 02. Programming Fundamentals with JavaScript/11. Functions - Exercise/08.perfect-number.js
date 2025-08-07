function perfectNumber(num) {
    let numArray = [];

    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            numArray.push(i);
        }
    }

    let result = 0;

    for(let j = 0; j < numArray.length; j++) {
        let number = Number(numArray[j]);

        result += number;
    }

    if(result === num) {
        console.log('We have a perfect number!');
    }else {
        console.log("It's not so perfect.");
        
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);