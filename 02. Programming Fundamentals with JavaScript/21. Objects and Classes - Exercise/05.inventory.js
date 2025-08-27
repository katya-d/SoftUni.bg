function inventory(input) {
  class heroRegister {
    constructor(Hero, level, items) {
      this.Hero = Hero;
      this.level = level;
      this.items = items;
    }
  }

  let register = {};
  let registersArray = [];

  for (let line of input) {
    let lineParts = line.split(" / ");
    let heroName = lineParts[0];
    let heroLevel = Number(lineParts[1]);
    let itemsParts = lineParts[2].split(", ");

    register = new heroRegister(heroName, heroLevel, itemsParts.join(", "));
    registersArray.push(register);
  }

  registersArray = registersArray.sort((a, b) => a.level - b.level);

  for (let line of registersArray) {
    for (let [key, value] of Object.entries(line)) {
      if (key === "Hero") {
        console.log(`${key}: ${value}`);
      } else {
        console.log(`${key} => ${value}`);
      }
    }
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
console.log("----------------");
inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
