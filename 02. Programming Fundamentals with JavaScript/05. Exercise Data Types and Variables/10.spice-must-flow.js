function spiceMustFlow(startingYield) {
    let extractCountDay = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        extractCountDay++;
        totalSpice += startingYield;
        startingYield -= 10;
        totalSpice -= 26;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(extractCountDay);
    console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);

