function newHouse(flowersType, numberFlowers, budget) {
    let totalPrice = 0;

    switch (flowersType) {
        case "Roses":
            totalPrice = numberFlowers * 5;
            if(numberFlowers > 80) {
                totalPrice *= 0.90;
            }
        break;

        case "Dahlias":
            totalPrice = numberFlowers * 3.80;
            if(numberFlowers > 90) {
                totalPrice *= 0.85;
            }
        break;

        case "Tulips":
            totalPrice = numberFlowers * 2.80;
            if(numberFlowers > 80) {
                totalPrice *= 0.85;
            }
        break;

        case "Narcissus":
            totalPrice = numberFlowers * 3;
            if(numberFlowers < 120) {
                totalPrice += (totalPrice - (totalPrice * 0.85));
            }
        break;

        case "Gladiolus":
            totalPrice = numberFlowers * 2.50;
            if(numberFlowers < 80) {
                totalPrice += (totalPrice - (totalPrice * 0.80));
            }
        break;
    }

    if(totalPrice <= budget) {
        let leftMoney = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${numberFlowers} ${flowersType} and ${leftMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}

newHouse('Roses', 55, 250);
newHouse('Tulips', 88, 260);
newHouse('Narcissus', 119, 360);
newHouse('Gladiolus', 64, 160);