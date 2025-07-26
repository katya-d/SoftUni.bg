function covnertToObject(receivedString) {
    let convertedObject = JSON.parse(receivedString);

    for(let [key, value] of Object.entries(convertedObject)) {
        console.log(`${key}: ${value}`);
    }
}

covnertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
