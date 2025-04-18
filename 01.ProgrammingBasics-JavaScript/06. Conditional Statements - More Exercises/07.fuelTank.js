function fuelTank(fuelType, fuelInTank) {
    
    let text = ``;

    if(fuelInTank >= 25) {
        text = `You have enough ${fuelType.toLowerCase()}.`;
    }else {
        text = `Fill your tank with ${fuelType.toLowerCase()}!`;
    }

    if(fuelType !== "Diesel" && fuelType !== "Gasoline" && fuelType !== "Gas") {
        text = `Invalid fuel!`;
    }
   
    console.log(text);
}

fuelTank("Diesel", 10);
fuelTank("Gasoline", 40);
fuelTank("Gas", 25);
fuelTank("Kerosene", 200);