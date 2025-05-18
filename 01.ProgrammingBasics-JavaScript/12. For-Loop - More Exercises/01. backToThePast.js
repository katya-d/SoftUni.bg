function backToThePast(inheritedMoney, livedYear) {
    let ivanchoAge = 18;
    let leftedMoney = inheritedMoney;

    for(let i = 1800; i <= livedYear; i++) {
        if(i % 2 === 0) {
            leftedMoney -= 12000;
        }else {
            leftedMoney -= 12000 + 50 * ivanchoAge;
        }

        ivanchoAge++;
    }

    if(leftedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${leftedMoney.toFixed(2)} dollars left.`)
    }else {
        let neededMoney = leftedMoney * (-1);
        console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(50000, 1802);
backToThePast(100000.15, 1808);