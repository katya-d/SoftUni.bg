function reverseString(stringName) {
    let newString = stringName[stringName.length - 1];
    for(let i = stringName.length - 2; i >= 0; i--) {
        let char = stringName[i];

        newString += char;
    }

    console.log(newString);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');