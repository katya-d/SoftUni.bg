function gladiatorInventory(data) {
  let inventory = data.shift().split(" ");

  for (element of data) {
    let input = element.split(" ");
    let command = input[0];

    if (command === "Buy") {
      let equipment = input[1];

      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (command === "Trash") {
      let equipment = input[1];

      if (inventory.includes(equipment)) {
        let indexOfEquipment = inventory.indexOf(equipment);

        inventory.splice(indexOfEquipment, 1);
      }
    } else if (command === "Repair") {
      let equipment = input[1];
      let indexOfEquipment = inventory.indexOf(equipment);

      if (inventory.includes(equipment)) {
        let repair = inventory.splice(indexOfEquipment, 1).join("");

        inventory.push(repair);
      }
    } else if (command === "Upgrade") {
      let equipmentParts = input[1].split("-");
      let equipment = equipmentParts[0];
      let upgrade = equipmentParts[1];

      if (inventory.includes(equipment)) {
        let indexOfEquipment = inventory.indexOf(equipment);
        let upgradedEquipment = `${equipment}:${upgrade}`;

        inventory.splice(indexOfEquipment + 1, 0, upgradedEquipment);
      }
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
