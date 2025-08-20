function toJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    
    let convertedToJSON = JSON.stringify(person);

    console.log(convertedToJSON);
}

toJSON('George', 'Jones', 'Brown');