function carToGo(budget, season) {
    let carClass = "";
    let car = "";
    let price = 0;

    if(budget <= 100) {
        carClass = "Economy class";

        switch(season) {
            case "Summer":
                car = "Cabrio";
                price = budget * 0.35;
            break;

            case 'Winter':
                car = "Jeep";
                price = budget *  0.65;
            break;
        }
    }else if(budget > 100 && budget <= 500) {
        carClass = "Compact class";

        switch(season) {
            case "Summer":
                car = "Cabrio";
                price = budget * 0.45;
            break;

            case 'Winter':
                car = "Jeep";
                price = budget *  0.80;
            break;
        }
    }else if(budget > 500) {
        carClass = "Luxury class";
        car = "Jeep";
        price = budget * 0.90;
    }

    console.log(`${carClass}`);
    console.log(`${car} - ${price.toFixed(2)}`); 
}

carToGo(450, "Summer");
carToGo(450, "Winter");
carToGo(1010, "Summer");
carToGo(99.99, "Summer");
carToGo(1010, "Winter");
carToGo(70.50, "Winter");