function arrayManipulation(input) {
    let num;
    let arrOfNumbers = input.shift()
        .split(" ")
        .map(Number);

    for (el of input) {
        let newArr = el.split(" ");

        let command = newArr[0];

        if(command === 'Add') {
            num = Number(newArr[1]);

            arrOfNumbers.push(num);
        }else if(command === 'Remove') {
            num = Number(newArr[1]);

            arrOfNumbers = arrOfNumbers.filter(filteredNum => filteredNum !== num);
        }else if(command === 'RemoveAt') {
            num = Number(newArr[1]);

            arrOfNumbers.splice(num, 1);
        }else if(command === 'Insert') {
            num = Number(newArr[1]);
            let index = Number(newArr[2]);

            arrOfNumbers.splice(index, 0, num);
        }
    }
    
    console.log(arrOfNumbers.join(' '));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
arrayManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
