function fishingBoat(budget, season, fishersNumber) {
    let boatPrice = 0;
    let discount = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
        break;
    
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
        break;

        case "Winter":
            boatPrice = 2600;
        break;
    }

    if(fishersNumber <= 6) {
        discount = 0.10;
    }else if(fishersNumber >= 7 && fishersNumber <= 11) {
        discount = 0.15;
    }else if(fishersNumber > 12) {
        discount = 0.25;
    }

    if(fishersNumber % 2 === 0 && season !== "Autumn") {
        boatPrice *= 0.95;
    }

    let endPrice = boatPrice - (boatPrice * discount);

    if(budget >= endPrice) {
        let leftedMoney = budget - endPrice;
        console.log(`Yes! You have ${leftedMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = endPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);       
    } 
}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);