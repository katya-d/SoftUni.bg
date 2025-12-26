function spiceMustFlow(startingYield) {
    let total = 0;
    let day = 0;
    let yieldDays = startingYield;

    while(startingYield >= 100) {
        startingYield -= 10;
        day++;
        if(yieldDays >= 100) {
            yieldDays -= 26;
            total += yieldDays;
        }
        
        yieldDays = startingYield;
    }

    if(total >= 26) {
        total -= 26;
    }

    console.log(day);
    console.log(total);
}

spiceMustFlow(111);
console.log('---------');
spiceMustFlow(450);