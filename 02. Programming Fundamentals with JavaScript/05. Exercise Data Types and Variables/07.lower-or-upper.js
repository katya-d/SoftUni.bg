function lowerOrUpper(char) {
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        console.log('lower-case');
    }else {
        console.log('upper-case');
    }
}

lowerOrUpper('L');
lowerOrUpper('f');