function journey(budget, season) {
    let place = "";
    let destination = "";
    let usedMoney = 0;

    switch (season) {
        case "summer":
            place = "Camp";
            if(budget <= 100) {
                destination = "Bulgaria";
                usedMoney = budget * 0.30;
            }else if(budget <= 1000) {
                destination = "Balkans";
                usedMoney = budget * 0.40;
            }else if( budget > 1000) {
                destination = "Europe";
                usedMoney = budget * 0.90;
            }
        break;
    
        case "winter":
            place = "Hotel";
            if(budget <= 100) {
                destination = "Bulgaria";
                usedMoney = budget * 0.70;
            }else if(budget <= 1000) {
                destination = "Balkans";
                usedMoney = budget * 0.80;
            }else if( budget > 1000) {
                destination = "Europe";
                usedMoney = budget * 0.90;
            }
        break;
    }

    if(destination === "Europe") {
        place = "Hotel";
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${usedMoney.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");