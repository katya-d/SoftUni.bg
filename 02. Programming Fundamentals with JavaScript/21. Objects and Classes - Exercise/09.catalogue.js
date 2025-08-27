function catalogue(input) {
  class Catalogue {
    constructor(productName, productPrice) {
      this[productName] = productPrice;
    }
  }

  let catalogueArray = [];

  for (let line of input) {
    let lineParts = line.split(" : ");
    productName = lineParts[0];
    productPrice = Number(lineParts[1]);

    let catalog = new Catalogue(productName, productPrice);

    catalogueArray.push(catalog);
  }

  catalogueArray = catalogueArray.sort((a, b) => {
    let keyA = Object.keys(a);
    let keyB = Object.keys(b);
    return keyA[0].localeCompare(keyB[0]);
  });

  let letter = "";

  for (line of catalogueArray) {
    for (let [key, value] of Object.entries(line)) {
      if (letter !== key[0]) {
        console.log(key[0]);
      }
      letter = key[0];
      console.log(`  ${key}: ${value}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
console.log("----------------");

catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
