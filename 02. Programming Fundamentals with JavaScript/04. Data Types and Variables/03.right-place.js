function rightPlace(stringOne, char, stringTwo) {
    let replaced = stringOne.replace("_", char);

    if(replaced === stringTwo){
        console.log("Matched");
    }else {
        console.log('Not Matched');
    }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
