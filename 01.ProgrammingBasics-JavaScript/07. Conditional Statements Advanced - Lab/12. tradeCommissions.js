function tradeCommissions(town, volumeTrade) {
    let percent;
    switch (town) {
        case "Sofia":
            if(volumeTrade >= 0 && volumeTrade <= 500) {
                percent = 0.05;
            }else if(volumeTrade > 500 && volumeTrade <= 1000) {
                percent = 0.07;
            }else if(volumeTrade > 1000 && volumeTrade <= 10000) {
                percent = 0.08;
            }else if(volumeTrade > 10000) {
                percent = 0.12;
            }else {
                percent = "error";
            }
        break;

        case "Varna":
            if(volumeTrade >= 0 && volumeTrade <= 500) {
                percent = 0.045;
            }else if(volumeTrade > 500 && volumeTrade <= 1000) {
                percent = 0.075;
            }else if(volumeTrade > 1000 && volumeTrade <= 10000) {
                percent = 0.1;
            }else if(volumeTrade > 10000) {
                percent = 0.13;
            }else {
                percent = "error";
            }
        break;
    
        case "Plovdiv":
            if(volumeTrade >= 0 && volumeTrade <= 500) {
                percent = 0.055;
            }else if(volumeTrade > 500 && volumeTrade <= 1000) {
                percent = 0.08;
            }else if(volumeTrade > 1000 && volumeTrade <= 10000) {
                percent = 0.12;
            }else if(volumeTrade > 10000) {
                percent = 0.145;
            }else {
                percent = "error";
            }
        break;

        default:
            town = "error";
        break;
    }

    if(percent === "error" || town === "error") {
        console.log("error");
    }else {
        let sum = volumeTrade * percent;
        console.log(sum.toFixed(2));
    }
}

tradeCommissions("Sofia", 10005);
tradeCommissions("Plovdiv", 10000.01);
tradeCommissions("Varna", 3874.50);
tradeCommissions("Kaspichan", -50);