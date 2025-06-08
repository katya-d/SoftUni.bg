function login(input) {
    let username = input[0];
    let attempts = 0;
    let password = "";
    let loginAttempt = "";

    //Username Reversed Loop
    for(let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    //Login loop attemps
    for(let j = 1; j < input.length; j++) {

        loginAttempt = input[j];

        if(loginAttempt === password) {
            console.log(`User ${username} logged in.`);
            break;
        }else {
            attempts++;
            if(attempts === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
            console.log('Incorrect password. Try again.');
        }
    }
}

login(['Acer','login','go','let me in','recA']);
console.log("-----------");
login(['momo','omom']);
console.log("-----------");
login(['sunny','rainy','cloudy','sunny','not sunny']);