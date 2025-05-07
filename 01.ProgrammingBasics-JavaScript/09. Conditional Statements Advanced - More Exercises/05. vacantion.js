function vacantion(budget, season) {
    let location = "";
    let place = "";
    let price = 0;

        if(budget <= 1000) {
            place = "Camp";

            switch(season) {
                case "Summer":
                    location = "Alaska";
                    price = budget * 0.65;
                break;
    
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.45;
                break;
            }
        }else if(budget > 1000 && budget <= 3000) {
            place = "Hut";

            switch(season) {
                case "Summer":
                    location = "Alaska";
                    price = budget * 0.80;
                break;
    
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.60;
                break;
            }
        }else if(budget > 3000) {
            place = "Hotel";
            price = budget * 0.90;

            switch(season) {
                case "Summer": location = "Alaska"; break;
                case "Winter": location = "Morocco"; break;
            }
        }

        console.log(`${location} - ${place} - ${price.toFixed(2)}`)
}

vacantion(800, "Summer");
vacantion(799.50, "Winter");
vacantion(3460, "Summer");
vacantion(1100, "Summer");
vacantion(5000, "Winter");
vacantion(2543.99, "Winter");