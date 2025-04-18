function transportPrice(KmNumber, period) {
    let costs = 0;

    if(KmNumber < 20) {
        if(period === "day") {
            costs = (KmNumber * 0.79) + 0.70;
        }else if(period === "night") {
            costs = (KmNumber * 0.90) + 0.70;
        }
    }else if(KmNumber >= 20 && KmNumber < 100) {
        costs = KmNumber * 0.09;
    }else if(KmNumber >= 100) {
        costs = KmNumber * 0.06;
    }
    
    console.log(costs.toFixed(2));
}

transportPrice(5, "day");
transportPrice(7, "night");
transportPrice(25, "day");
transportPrice(180, "night");