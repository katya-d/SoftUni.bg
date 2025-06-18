function repeatString(string, repeats) {
    let result = '';

    for(let i = 1; i <= repeats; i++) {
        result += string;
    }

    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
