function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);

  let warShip = input.shift().split(">").map(Number);

  let maxHealth = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let parts = input[i].split(" ");
    let command = parts.shift();

    if (command === "Retire") {
      break;
    }

    if (command === "Fire") {
      let index = Number(parts.shift());
      let damage = Number(parts.shift());

      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;
        if (warShip[index] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          return;
        }
      }
    } else if (command === "Defend") {
      let startIndex = Number(parts.shift());
      let endIndex = Number(parts.shift());
      let damage = Number(parts.shift());

      let totalElements = endIndex - startIndex;
      if (
        startIndex >= 0 &&
        endIndex < pirateShip.length &&
        totalElements <= pirateShip.length
      ) {
        for (let j = startIndex; j <= endIndex; j++) {
          pirateShip[j] = Number(pirateShip[j]) - damage;

          if (pirateShip[j] <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    } else if (command === "Repair") {
      let index = Number(parts.shift());
      let health = Number(parts.shift());

      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += health;

        if (pirateShip[index] >= maxHealth) {
          pirateShip[index] = maxHealth;
        }
      }
    } else if (command === "Status") {
      let repairNeeded = pirateShip
        .filter((x) => x < maxHealth * 0.2)
        .map(Number);

      repairNeeded = repairNeeded.map(Number);

      console.log(`${repairNeeded.length} sections need repair.`);
    }
  }

  let pirateShipSum = 0;

  for (let el of pirateShip) {
    pirateShipSum += Number(el);
  }

  let warshipSum = 0;

  for (let el of warShip) {
    warshipSum += Number(el);
  }

  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warshipSum}`);
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("----------");
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
