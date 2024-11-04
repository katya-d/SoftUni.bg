function fishland(param1, param2, param3, param4, param5) {

    let mackerelPrice = Number(param1);
    let sprinklePrice = Number(param2);
    let bonitoWeight = Number(param3);
    let safridWeight = Number(param4);
    let musselsWeight = Number(param5);

    let bonitoPrice = mackerelPrice + (mackerelPrice * (60/100));
    let safridPrice = sprinklePrice + (sprinklePrice * (80/100));
    let musselsPrice = 7.50;

    let totalPrice = (bonitoPrice * bonitoWeight) + (safridPrice * safridWeight) + (musselsPrice * musselsWeight);

    console.log(totalPrice.toFixed(2));
}

fishland(6.90, 4.20, 1.5, 2.5, 1);
fishland(5.55, 3.57, 4.3, 3.6, 7);
fishland(7.79, 5.35, 9.3, 0, 0);