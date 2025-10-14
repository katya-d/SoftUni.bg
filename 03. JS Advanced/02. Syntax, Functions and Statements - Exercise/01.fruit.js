function fruit(fruitType, weightInGrams, pricePerKg) {
  let weightInkg = weightInGrams / 1000;
  let totalPrice = weightInkg * pricePerKg;

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInkg.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
