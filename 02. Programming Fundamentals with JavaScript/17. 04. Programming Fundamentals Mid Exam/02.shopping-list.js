function shoppingList(input) {
  let listWithProducts = input.shift().split("!");

  let parts = input.shift().split(" ");
  let command = parts.shift();
  while (command !== "Go") {
    if (command === "Urgent") {
      let item = parts.shift();

      if (!listWithProducts.includes(item)) {
        listWithProducts.unshift(item);
      }
    } else if (command === "Unnecessary") {
      let item = parts.shift();

      if (listWithProducts.includes(item)) {
        let index = listWithProducts.indexOf(item);

        listWithProducts.splice(index, 1);
      }
    } else if (command === "Correct") {
      let oldItem = parts.shift();
      let newItem = parts.shift();

      if (listWithProducts.includes(oldItem)) {
        let index = listWithProducts.indexOf(oldItem);

        listWithProducts.splice(index, 1, newItem);
      }
    } else if (command === "Rearrange") {
      let item = parts.shift();

      if (listWithProducts.includes(item)) {
        let index = listWithProducts.indexOf(item);

        listWithProducts.splice(index, 1);

        listWithProducts.push(item);
      }
    }

    parts = input.shift().split(" ");
    command = parts.shift();
  }

  console.log(listWithProducts.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
