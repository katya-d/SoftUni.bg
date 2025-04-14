function toyShop(holidayPrice, puzzlesNumber, dollsNumber, bearsNumber, minionsNumber, trucksNumber) {
    let puzzlesPrice = puzzlesNumber * 2.60;
    let dollsPrice = dollsNumber * 3;
    let bearsPrice = bearsNumber * 4.10;
    let minionsPrice = minionsNumber * 8.20;
    let trucksPrice = trucksNumber * 2;

    let totalToys = puzzlesNumber + dollsNumber + bearsNumber + minionsNumber + trucksNumber;

    let sum = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    sum -= sum * (10 / 100);

    if(totalToys >= 50) {
        sum -= sum * (25 / 100);
    }

    let endMoney = sum - holidayPrice;

    if(sum >= holidayPrice) {
        console.log(`Yes! ${endMoney.toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(endMoney * (-1)).toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);