function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);

  let command = input.shift();
  let shotedTargets = 0;

  while (command !== "End") {
    let targetIndex = Number(command);
    if (targetIndex < targets.length) {
      let targetValue = Number(targets[targetIndex]);

      if (targetValue !== -1) {
        shotedTargets++;
        targets[targetIndex] = -1;
        for (let i = 0; i < targets.length; i++) {
          let value = Number(targets[i]);

          if (value > targetValue) {
            targets[i] = value - targetValue;
          } else if (value <= value && value !== -1) {
            targets[i] = value + targetValue;
          }
        }
      }
    }
    command = input.shift();
  }

  targets = targets.join(" ");

  console.log(`Shot targets: ${shotedTargets} -> ${targets}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
