function suppliesForSchool(param1, param2, param3, param4) {
    let pensPocketsNum = Number(param1);
    let markersPocketsNum = Number(param2);
    let cleaningAgentLiters = Number(param3);
    let discountPercent = Number(param4);

    let penPocketPrice = 5.80;
    let markerPocketPrice = 7.20;
    let cleaningAgentLiterPrice = 1.20;

    let pensPrice = pensPocketsNum * penPocketPrice;
    let markersPrice = markersPocketsNum * markerPocketPrice;
    let cleaningAgentPrice = cleaningAgentLiters * cleaningAgentLiterPrice;

    let suppliesSum = pensPrice + markersPrice + cleaningAgentPrice;
    let discount = suppliesSum * (discountPercent / 100);
    let moneyToCollect = suppliesSum - discount;

    console.log(moneyToCollect);
}

suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);