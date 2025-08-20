function treasureHunt(input) {
  let lootItems = input.shift().split("|");
  let lengths = 0;
  let stealedItems = [];

  for (let i = 0; i < input.length; i++) {
    let parts = input[i].split(" ");

    let command = parts.shift();

    if (command === "Yohoho!") {
      break;
    }

    if (command === "Loot") {
      for (let j = 0; j < parts.length; j++) {
        let item = parts[j];

        if (!lootItems.includes(item)) {
          lootItems.unshift(item);
        }
      }
    } else if (command === "Drop") {
      let index = Number(parts.shift());

      if (index >= 0 && index < lootItems.length) {
        let item = lootItems[index];

        lootItems.splice(index, 1);
        lootItems.push(item);
      }
    } else if (command === "Steal") {
      let count = Number(parts.shift());

      if (count >= lootItems.length) {
        stealedItems = lootItems.splice(0, lootItems.length);
        console.log(stealedItems.join(", "));
      } else {
        let lastElements = lootItems.length - count;
        stealedItems = lootItems.splice(lastElements, count);
        console.log(stealedItems.join(", "));
      }
    }
  }

  for (let i = 0; i < lootItems.length; i++) {
    let item = lootItems[i];

    lengths += item.length;
  }

  let averageGain = lengths / lootItems.length;

  if (lootItems.length > 0) {
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  } else {
    console.log(`Failed treasure hunt.`);
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
