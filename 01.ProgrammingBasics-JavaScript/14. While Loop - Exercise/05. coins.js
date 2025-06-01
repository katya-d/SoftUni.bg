function coins(moneyBack) {
    let toMonets = Math.trunc(moneyBack)
    let monets = Math.round((moneyBack - toMonets) * 100);
    let totalCoins = 0;


    let totalMonets = (toMonets * 100) + monets;

    while(totalMonets > 0) {
        if(totalMonets >= 200) {
            totalMonets -= 200;
        }else if(totalMonets >= 100) {
            totalMonets -= 100;
        }else if(totalMonets >= 50) {
            totalMonets -= 50;
        }else if(totalMonets >= 20) {
            totalMonets -= 20;
        }else if(totalMonets >= 10) {
            totalMonets -= 10;
        }else if(totalMonets >= 5) {
            totalMonets -= 5;
        }else if(totalMonets >= 2) {
            totalMonets -= 2;
        }else {
            totalMonets -= 1;
        }

        totalCoins++;
    }
    
    console.log(totalCoins);
}

coins(1.23);
coins(2);
coins(0.56);
coins(2.73);
coins(1.18);