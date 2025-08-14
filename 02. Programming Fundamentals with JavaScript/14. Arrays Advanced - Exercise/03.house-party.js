function houseParty(input) {
  let namesList = [];

  for (let i = 0; i < input.length; i++) {
    let data = input[i].split(" ");

    let name = data[0];

    if (data.length < 4) {
      if (!namesList.includes(name)) {
        namesList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
        if(namesList.includes(name)) {
            let index = namesList.indexOf(name);
            namesList.splice(index, 1);
        }else {
            console.log(`${name} is not in the list!`);
        }
    }
  }

   console.log(namesList.join(`\n`));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
console.log("--------");

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
