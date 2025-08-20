function inventory(input) {
  let collectedItems = input.shift().split(", ");

  for (let i = 0; i < input.length; i++) {
    let parts = input[i].split(" - ");
    let command = parts[0];

    if (command === "Craft!") {
      break;
    }

    if (command === "Collect") {
      let item = parts[1];

      if (!collectedItems.includes(item)) {
        collectedItems.push(item);
      }
    } else if (command === "Drop") {
      let item = parts[1];

      if (collectedItems.includes(item)) {
        let indexOfItem = collectedItems.indexOf(item);

        collectedItems.splice(indexOfItem, 1);
      }
    } else if (command === "Combine Items") {
      let combinedItems = parts[1].split(":");

      let oldItem = combinedItems[0];
      let newItem = combinedItems[1];

      if (collectedItems.includes(oldItem)) {
        let indexOfOldItem = collectedItems.indexOf(oldItem);

        collectedItems.splice(indexOfOldItem, 1, oldItem, newItem);
      }
    } else if (command === "Renew") {
      let item = parts[1];

      if (collectedItems.includes(item)) {
        let indexOfItem = collectedItems.indexOf(item);

        collectedItems.splice(indexOfItem, 1);

        collectedItems.push(item);
      }
    }
  }

  console.log(collectedItems.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
console.log("-----------");
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
