function login(arrayOfStrings) {
    let userName = arrayOfStrings[0];
    let attemptsCount = 0;

    for(let i = 1; i < arrayOfStrings.length; i++) {
        word = arrayOfStrings[i];
        let password = (word.split('')).reverse().join('');

        attemptsCount++;

        if(userName === password) {
            console.log(`User ${userName} logged in.`);
        }else {
            if(attemptsCount === 4) {
            console.log(`User ${userName} blocked!`);
            break;
        }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);