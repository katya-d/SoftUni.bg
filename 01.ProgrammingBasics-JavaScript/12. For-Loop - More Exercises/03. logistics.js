function logistics(input) {
    let loadsNumber = Number(input[0]);
    let minibusTonnage = 0;
    let truckTonnage = 0;
    let trainTonnage = 0;

    for(let i = 1; i <= loadsNumber; i++) {
        let tonnageLoad = Number(input[i]);

        if(tonnageLoad <= 3) {
            minibusTonnage += tonnageLoad;

        }else if(tonnageLoad >= 4 && tonnageLoad <= 11) {
            truckTonnage += tonnageLoad;

        }else if(tonnageLoad >= 12) {
            trainTonnage += tonnageLoad;
        }
    }

    let totalTonnage = minibusTonnage + truckTonnage + trainTonnage;

    let minibusPrice = minibusTonnage * 200;
    let truckPrice = truckTonnage * 175;
    let trainPrice = trainTonnage * 120;

    let totalPrice = minibusPrice + truckPrice + trainPrice;

    let averagePrice = totalPrice / totalTonnage;

    console.log(`${averagePrice.toFixed(2)}`);

    let minibusPercent = minibusTonnage / totalTonnage * 100;
    console.log(`${minibusPercent.toFixed(2)}%`);

    let truckPercent = truckTonnage / totalTonnage * 100;
    console.log(`${truckPercent.toFixed(2)}%`);

    let trainPercent = trainTonnage / totalTonnage * 100;
    console.log(`${trainPercent.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);