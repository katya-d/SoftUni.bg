function petShop(param1, param2) {
    let dogFoodNum = Number(param1);
    let catFoodNum = Number(param2);

    let dogFoodPrice = dogFoodNum * 2.50;
    let catFoodPrice  = catFoodNum * 4;

    let totalPrice = dogFoodPrice + catFoodPrice;
    let data = `${totalPrice} lv.`

    console.log(data);
}

petShop(5, 4);
petShop(13, 9);