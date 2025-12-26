function townInfo(town, population, area) {
  let townLength = town.length;
  let isDataValid = true;

  if (townLength < 3) {
    console.log("Town name must be at least 3 characters!");
    isDataValid = false;
  }

  if (population < 0) {
    console.log("Population must be a positive number!");
    isDataValid = false;
  }

  if (area < 0) {
    console.log("Area must be a positive number!");
    isDataValid = false;
  }

  if (isDataValid) {
    console.log(
      `Town ${town} has population of ${population} and area ${area} square km.`
    );
  }
}

townInfo("Sofia", 1286383, 492);
console.log("-------------");
townInfo("LA", 1481353, 512);
console.log("-------------");
townInfo("Plovdiv", -45000, 100);
console.log("-------------");
townInfo("Ka", 3600, -50);
