function solve(input) {
  let resource = "";
  let quantity = 0;

  let mineTask = new Map();

  for (let i = 0; i < input.length; i += 2) {
    resource = input[i];
    quantity = Number(input[i + 1]);

    totalQuantity = 0;
    if (!mineTask.has(resource)) {
      mineTask.set(resource, quantity);
    } else {
      mineTask.set(resource, mineTask.get(resource) + quantity);
    }
  }

  for (let line of mineTask) {
    let resource = line[0];
    let quantity = Number(line[1]);

    console.log(`${resource} -> ${quantity}`);
  }
}

solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log("--------------------");
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
