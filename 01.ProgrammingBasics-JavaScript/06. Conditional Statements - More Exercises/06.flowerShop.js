function flowerShop(magnoliasNumber, hyacinthsNumber, rosesNumber, cactusesNumber, giftPrice) {
    let magnoliasPrice = magnoliasNumber * 3.25;
    let hyacinthsPrice = hyacinthsNumber * 4;
    let rosesPrice = rosesNumber * 3.50;
    let cactusesPrice = cactusesNumber * 8;

    let sum = magnoliasPrice + hyacinthsPrice + rosesPrice + cactusesPrice;

    let taxes = sum * 0.05;

    let endSum = sum - taxes;

    if(endSum >= giftPrice) {
        let leftMoney = endSum - giftPrice;

        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);

    }else {
        let neededMoney = giftPrice - endSum;

        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }
}

flowerShop(2, 3, 5, 1, 50);
flowerShop(15, 7, 5, 10, 100);