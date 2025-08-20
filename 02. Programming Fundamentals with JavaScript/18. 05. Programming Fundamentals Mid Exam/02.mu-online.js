function muOnline(input) {
  let roomsArray = input.split("|");
  let health = 100;
  let bitcoins = 0;
  let roomNumber = 0;

  for (let i = 0; i < roomsArray.length; i++) {
    let parts = roomsArray[i].split(" ");
    let room = parts[0];
    roomNumber++;

    if (room === "potion") {
      let additionalHealth = Number(parts[1]);

      let totalHealth = health + additionalHealth;

      if (totalHealth > 100) {
        let healed = 100 - (totalHealth - additionalHealth);
        health = 100;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
        health = totalHealth;
        console.log(`You healed for ${additionalHealth} hp.`);
        console.log(`Current health: ${totalHealth} hp.`);
      }
    } else if (room === "chest") {
      let foundedBitcoins = Number(parts[1]);

      bitcoins += foundedBitcoins;
      console.log(`You found ${foundedBitcoins} bitcoins.`);
    } else {
      let attackPower = Number(parts[1]);
      let monster = parts[0];

      health -= attackPower;

      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${roomNumber}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
