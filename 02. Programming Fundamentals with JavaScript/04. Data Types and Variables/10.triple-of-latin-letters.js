function latinLetters(num) {
    let toNum = Number(num);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < toNum; i++) {
        let firstLetter = alphabet[i];
        for(let j = 0; j < toNum; j++) {
            let secondLetter = alphabet[j];
            for(let k = 0; k < toNum; k++) {
                let thirdLetter = alphabet[k];
                   console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

// latinLetters('3');
latinLetters(2);