function phoneBook(input) {
    let phonebook = {};

    for(let line of input) {
        let [name, phoneNumber] = line.split(' ');

        phonebook[name] = phoneNumber;
    }

    for(let personName in phonebook) {
        let telephoneNumber = phonebook[personName];

        console.log(`${personName} -> ${telephoneNumber}`);
    } 
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
console.log("----------");
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
