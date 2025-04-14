function godzillaVsKong(movieBudget, figurantsNumber, clothesPrice) {
    let movieDecor = movieBudget * (10 / 100);
    let moneyForClothes = figurantsNumber * clothesPrice;

    if(figurantsNumber > 150) {
        moneyForClothes -= moneyForClothes * (10 / 100);
    }

    let totalExpenses = movieDecor + moneyForClothes;

    let isEnoughMoney = movieBudget - totalExpenses;

    if(isEnoughMoney >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${isEnoughMoney.toFixed(2)} leva left.`);
    }else {
        isEnoughMoney *= (-1);
        console.log("Not enough money!");
        console.log(`Wingard needs ${isEnoughMoney.toFixed(2)} leva more.`)
    }
}

godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);