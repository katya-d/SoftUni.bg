function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);

  let commandParts = input.shift().split(" ");
  let command = commandParts[0];

  while (command !== "End") {
    if (command === "Shoot") {
      let index = Number(commandParts[1]);
      let power = Number(commandParts[2]);

      if (index >= 0 && index < targets.length) {
        targets[index] -= power;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    } else if (command === "Add") {
      let index = Number(commandParts[1]);
      let targetValue = Number(commandParts[2]);

      if (index >= 0 && index <= targets.length - 1) {
        targets.splice(index, 0, targetValue);
      } else {
        console.log("Invalid placement!");
      }
    } else if (command === "Strike") {
      let index = Number(commandParts[1]);
      let radius = Number(commandParts[2]);

      let start = index - radius;
      let end = index + radius;

      if (start >= 0 && end < targets.length) {
        targets.splice(start, end - start + 1);
      } else {
        console.log("Strike missed!");
      }
    }

    commandParts = input.shift().split(" ");
    command = commandParts[0];
  }

  console.log(targets.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
