function yardGreeting(param1) {
    let metersSquare = Number(param1);
    let price = 7.61;

    let totalPrice = metersSquare * price;
    let discount = totalPrice * 0.18;

    let endPrice = totalPrice - discount;

    console.log(`The final price is: ${endPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreeting(550);
console.log("----------");
yardGreeting(150);