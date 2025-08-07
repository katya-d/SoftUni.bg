function numberModification(num) {
    let numToString = String(num);

    let stringAsArray = numToString.split('');
    let sum = 0;

    function loop(data) {
        let sum = 0;
        for(let i = 0; i < data.length; i++) {
            let digit = Number(data[i]);
            sum += digit;
        }

        if(sum / data.length <= 5) {
            data.push('9');
            return loop(data);
        } else {
            return data.join('');
        }
    }

    let loopResult = loop(stringAsArray);

    console.log(loopResult);
}

numberModification(101);
numberModification(5835);