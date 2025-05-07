function matchTickets(budget, category, peopleNumber) {

    let transportPrice = 0;

    if(peopleNumber >= 1 && peopleNumber <= 4) {
        transportPrice = budget * 0.75;
    } else if(peopleNumber >= 5 && peopleNumber <= 9) {
        transportPrice = budget * 0.60;
    } else if(peopleNumber >= 10 && peopleNumber <= 24) {
        transportPrice = budget * 0.50;
    } else if(peopleNumber >= 25 && peopleNumber <= 49) {
        transportPrice = budget * 0.40;
    }else if( peopleNumber >= 50) {
        transportPrice = budget * 0.25;
    }

    let leftedMoney = budget - transportPrice;
    let categoryPrice = 0;

    switch(category) {
        case "VIP": categoryPrice = 499.99 * peopleNumber; break;
        case "Normal": categoryPrice = 249.99 * peopleNumber; break;
    }
    if(leftedMoney >= categoryPrice) {
        let sum = leftedMoney - categoryPrice;
        console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
    }else {
        let sum = categoryPrice - leftedMoney;
        console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
    }
}

matchTickets(1000, "Normal", 1);
matchTickets(30000, "VIP", 49);