function solve(input) {
  let storage = new Map();

  for (let line of input) {
    let [items, quantity] = line.split(" ");
    quantity = Number(quantity);

    if (storage.has(items)) {
      quantity += storage.get(items);
      storage.set(items, quantity);
    } else {
      storage.set(items, quantity);
    }
  }

  for (let [item, quantity] of storage) {
    console.log(`${item} -> ${quantity}`);
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log("----------------");
solve(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
