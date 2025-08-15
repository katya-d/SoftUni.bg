function arrayManipulator(integers, commandsArray) {
  for (let i = 0; i < commandsArray.length; i++) {
    let parts = commandsArray[i].split(" ");
    let command = parts.shift();
    parts = parts.map(Number);

    if (command === "add") {
      let index = parts.shift();
      let element = parts.shift();
      integers.splice(index, 0, element);
    } else if (command === "addMany") {
      let index = parts.shift();
      integers.splice(index, 0, ...parts);
    } else if (command === "contains") {
      let element = parts.shift();
      console.log(integers.includes(element) ? integers.indexOf(element) : -1);
    } else if (command === "remove") {
      let index = parts.shift();
      integers.splice(index, 1);
    } else if (command === "shift") {
      let positions = parts.shift() % integers.length;
      integers = integers.slice(positions).concat(integers.slice(0, positions));
    } else if (command === "sumPairs") {
      let newArray = [];
      for (let x = 0; x < integers.length; x += 2) {
        let firstNum = integers[x];
        let secondNum = integers[x + 1] || 0;
        newArray.push(firstNum + secondNum);
      }
      integers = newArray;
    } else if (command === "print") {
      console.log(`[ ${integers.join(", ")} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
