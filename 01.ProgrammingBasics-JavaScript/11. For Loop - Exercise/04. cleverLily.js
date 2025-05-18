function cleverLily(lilyAge, washingMachinePrice, toyPrice) {
    let evenBirthdayMoney = 0;
    let moneyFromParents = 10;

    let toysNumber = 0;

    for(let i = 1; i <= lilyAge; i++) {
        if(i % 2 === 0) {
            evenBirthdayMoney += moneyFromParents - 1;

            moneyFromParents += 10;
        }else {
            toysNumber += 1;
        }
    }

    let savedMoney = evenBirthdayMoney + (toysNumber * toyPrice);

    if(savedMoney >= washingMachinePrice) {
        let leftedMoney = savedMoney - washingMachinePrice;
        console.log(`Yes! ${leftedMoney.toFixed(2)}`);
    }else {
        let neededMoney = washingMachinePrice - savedMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

cleverLily(10, 170.0, 6);
cleverLily(21, 1570.98, 3);
