function lowerOrUpper(char) {
    let charToUp = char.toUpperCase();

    if(char === charToUp) {
        console.log('upper-case');
    }else {
        console.log('lower-case');
    }
}

lowerOrUpper('L');
lowerOrUpper('f');