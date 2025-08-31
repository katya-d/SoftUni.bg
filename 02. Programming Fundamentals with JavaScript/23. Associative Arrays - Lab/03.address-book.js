function solve(input) {
  let addressBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");

    addressBook[name] = address;
  }

  let entries = Object.entries(addressBook);

  entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, address] of entries) {
    console.log(`${name} -> ${address}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
console.log("------------------");
solve([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
