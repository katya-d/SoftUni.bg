function fuelTankPartTwo(fuelType, quantityFuel, clubCard) {
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    let fuel = "";

    if(clubCard === "Yes") {
        if(fuelType === "Gasoline") {
            fuel = gasolinePrice - 0.18;
        }else if(fuelType === "Diesel") {
            fuel = dieselPrice - 0.12;
        }else if(fuelType === "Gas") {
            fuel = gasPrice - 0.08;
        }
    }else {
        if(fuelType === "Gasoline") {
            fuel = gasolinePrice;
        }else if(fuelType === "Diesel") {
            fuel = dieselPrice;
        }else if(fuelType === "Gas") {
            fuel = gasPrice;
        }
    }

    let sum = quantityFuel * fuel;

    if(quantityFuel >= 20 && quantityFuel <= 25) {
        sum -= (sum * 0.08)
    }else if(quantityFuel > 25){
        sum -= (sum * 0.10);
    }

    console.log(`${sum.toFixed(2)} lv.`);
}

fuelTankPartTwo("Gas", 30, "Yes");
fuelTankPartTwo("Gasoline", 25, "No");
fuelTankPartTwo("Diesel", 19, "No");