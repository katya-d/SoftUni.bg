function smallShop(drink, town, quantity) {
    let price = 0;

    switch (town) {
        case "Sofia":
            if(drink === "coffee") {
                price = 0.50;
            }else if(drink === "water") {
                price = 0.80;
            }else if(drink === "beer") {
                price = 1.20;
            }else if(drink === "sweets") {
                price = 1.45;
            }else if(drink = "peanuts") {
                price = 1.60;
            }
        break;

        case "Plovdiv":
            if(drink === "coffee") {
                price = 0.40;
            }else if(drink === "water") {
                price = 0.70;
            }else if(drink === "beer") {
                price = 1.15;
            }else if(drink === "sweets") {
                price = 1.30;
            }else if(drink = "peanuts") {
                price = 1.50;
            }
        break;

        case "Varna":
            if(drink === "coffee") {
                price = 0.45;
            }else if(drink === "water") {
                price = 0.70;
            }else if(drink === "beer") {
                price = 1.10;
            }else if(drink === "sweets") {
                price = 1.35;
            }else if(drink = "peanuts") {
                price = 1.55;
            }
        break;
    }
    
    let sum = quantity * price;
    console.log(sum);
}

smallShop("coffee", "Varna", 2);
smallShop("peanuts", "Plovdiv", 1);
smallShop("beer", "Sofia", 2);
smallShop("water", "Plovdiv", 2);
smallShop("sweets", "Sofia", 2.23);