function echoType(input) {
    let typeOfInput = typeof(input);
    console.log(typeOfInput);
    if(typeOfInput === 'number' || typeOfInput === 'string') {
        console.log(input);
    }else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);