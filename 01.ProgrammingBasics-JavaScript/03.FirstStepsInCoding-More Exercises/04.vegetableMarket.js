function vegetableMarket(param1, param2, param3, param4) {
    let vegetablesPrice = Number(param1);
    let fruitsPrice = Number(param2);
    let vegetablesWeight = Number(param3);
    let fruitsWeight = Number(param4);

    let eur = 1.94;

    let vegetablesTotalPrice = vegetablesWeight * vegetablesPrice;
    let fruitsTotalPrice = fruitsWeight * fruitsPrice;

    let sumInBgn = vegetablesTotalPrice + fruitsTotalPrice;

    let sumInEur = sumInBgn / eur;

    console.log(sumInEur.toFixed(2));
}

vegetableMarket(0.194, 19.4, 10, 10);
vegetableMarket(1.5, 2.5, 10, 10);