function storeProvision(currentStockArr, orderedProductsArr) {
  let productInfo = {};

  for (let i = 0; i < currentStockArr.length; i += 2) {
    let productName = currentStockArr[i];
    let productQuantity = Number(currentStockArr[i + 1]);

    productInfo[productName] = productQuantity;
  }

  for (let j = 0; j < orderedProductsArr.length; j += 2) {
    let productName = orderedProductsArr[j];
    let productQuantity = Number(orderedProductsArr[j + 1]);

    if (productInfo.hasOwnProperty(productName)) {
      productInfo[productName] += productQuantity;
    } else {
      productInfo[productName] = productQuantity;
    }
  }

  let entries = Object.entries(productInfo);

  for (let [product, quantity] of entries) {
    console.log(`${product} -> ${quantity}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
console.log("-------------");
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
