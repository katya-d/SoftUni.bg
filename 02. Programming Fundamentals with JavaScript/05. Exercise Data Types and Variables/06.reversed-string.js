function reversedString(stringName) {
    // let reversed = stringName.split("").reverse().join("");

    let reversed = "";
    for(let i = stringName.length - 1; i >= 0; i--) {
        let char = stringName[i];
        reversed += char;
    }
   
    console.log(reversed);
}

reversedString('Information');
reversedString('star');
reversedString('racecar');