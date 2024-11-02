function concatenate(param1, param2, param3, param4) {
    let firstName = param1;
    let lastName = param2;
    let age = Number(param3);
    let town = param4;

    let concatenateData = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`

    console.log(concatenateData);
}

concatenate("Maria", "Ivanova", 20, "Sofia");
