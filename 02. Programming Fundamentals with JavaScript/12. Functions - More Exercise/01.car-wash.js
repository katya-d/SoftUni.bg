function carWash(data) {
  let cleanPercent = 0;

  for (let i = 0; i < data.length; i++) {
    let command = data[i];

    if (command === "soap") {
      cleanPercent += 10;
    } else if (command === "water") {
      cleanPercent += cleanPercent * 0.2;
    } else if (command === "vacuum cleaner") {
      cleanPercent += cleanPercent * 0.25;
    } else if (command === "mud") {
      cleanPercent -= cleanPercent * 0.1;
    }
  }

  console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
