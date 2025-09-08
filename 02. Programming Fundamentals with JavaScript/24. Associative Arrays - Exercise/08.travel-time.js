function travelTime(input) {
  let travel = new Map();

  for (let line of input) {
    let [country, town, travelCost] = line.split(" > ");
    travelCost = Number(travelCost);

    if (!travel.has(country)) {
      travel.set(country, new Map());
    }

    let towns = travel.get(country);

    if (!towns.has(town)) {
      towns.set(town, travelCost);
    } else {
      let oldPrice = towns.get(town);
      if (travelCost < oldPrice) {
        towns.set(town, travelCost);
      }
    }
  }

  let sortedCountries = Array.from(travel.keys()).sort((a, b) =>
    a.localeCompare(b)
  );

  for (let country of sortedCountries) {
    let towns = Array.from(travel.get(country));

    towns.sort((a, b) => a[1] - b[1]);

    let result = towns.map(([town, price]) => `${town} -> ${price}`).join(" ");
    console.log(`${country} -> ${result}`);
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
console.log("--------------------------");
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
