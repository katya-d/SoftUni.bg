function specialNumbers(n) {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        let numToString = String(i);

        for(let j = 0; j < numToString.length; j++) {
            let num = Number(numToString[j]);
            sum += num;            
        }
                
            if(sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`);
            }else {
                console.log(`${i} -> False`);
            }
            sum = 0;
    }
}

specialNumbers(20);