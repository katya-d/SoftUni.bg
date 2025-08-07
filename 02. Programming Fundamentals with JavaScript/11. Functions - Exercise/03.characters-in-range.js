function charsInRange(charOne, charTwo) {
    let asciiCharOne = charOne.charCodeAt();
    let asciiCharTwo = charTwo.charCodeAt();

    let smallerChar = Math.min(asciiCharOne, asciiCharTwo);
    let biggerChar = Math.max(asciiCharOne, asciiCharTwo);

    let charString = " ";

    for(let i = smallerChar + 1; i < biggerChar; i++) {

        let codeToChar = String.fromCharCode(i);

        charString += codeToChar + " ";

    }

    console.log(charString);
}

charsInRange("a", "d");
charsInRange("#", ":");
charsInRange("C", "#");
