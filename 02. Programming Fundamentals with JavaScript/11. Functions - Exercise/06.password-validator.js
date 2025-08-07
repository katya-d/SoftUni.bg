function passwordValidator(password) {
    let length = password.length >= 6 && password.length <= 10;


    let arr = password.split('');
    let isThereTwoDigits = 0;
    let isThereSmallLetters = 0;
    let isThereCapitalLetters = 0;

    let isOnlyLettersAndDigitsCount = 0;

    for(let i = 0; i < arr.length; i++) {

        let char = arr[i];

        let asciiCode = char.charCodeAt();

        let digits = asciiCode >= 48 && asciiCode <= 57;

        if(digits) {
            isThereTwoDigits++;
            isOnlyLettersAndDigitsCount++;
        }

        let smallLetters = asciiCode >= 97 && asciiCode <= 122;

        if(smallLetters) {
            isThereSmallLetters++;
            isOnlyLettersAndDigitsCount++;
        }

        let capitalLetters = asciiCode >= 65 && asciiCode <= 90;

        if(capitalLetters) {
            isThereCapitalLetters++;
            isOnlyLettersAndDigitsCount++;
        }
    }

    if((isThereSmallLetters > 0) && (isThereCapitalLetters > 0) && (isThereTwoDigits >= 2)) {
        console.log('Password is valid');
    }

    if(!length) {
        console.log('Password must be between 6 and 10 characters');
    }

    if(isOnlyLettersAndDigitsCount !== password.length) {
        console.log('Password must consist only of letters and digits');
    }

    if(isThereTwoDigits < 2) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn');
console.log('-----------');
passwordValidator('MyPass123');
console.log('-----------');
passwordValidator('Pa$s$s');
