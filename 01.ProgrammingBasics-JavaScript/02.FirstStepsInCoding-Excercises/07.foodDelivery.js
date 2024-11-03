function foodDelivery(param1, param2, param3) {
    let numChickenMenus = Number(param1);
    let numFishMenus = Number(param2);
    let numVegetarianMenus = Number(param3);

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;

    let deliveryPrice = 2.50;

    let chickenMenus = numChickenMenus * chickenMenuPrice;
    let fishMenus = numFishMenus * fishMenuPrice;
    let vegetarianMenus = numVegetarianMenus * vegetarianMenuPrice;

    let menusPrice = chickenMenus + fishMenus + vegetarianMenus;

    let dessertPrice = menusPrice * (20 / 100);

    let endPrice = menusPrice + dessertPrice + deliveryPrice;

    console.log(endPrice);
}

foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);