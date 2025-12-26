function bitcoinMining(arr) {
    let totalAmount = 0;
    let totalBitcoins = 0;
    let firstDay = 0;

    for(let i = 0; i < arr.length; i++) {
        let day = i + 1;

        let minedGold = Number(arr[i]);

        if(day % 3 === 0) {
            minedGold = minedGold * 0.7;
        }

        let exchange = minedGold * 67.51;
        totalAmount += exchange;

        if(totalAmount >= 11949.16) {
            let bitcoinsAmount = Math.floor(totalAmount / 11949.16);
            totalBitcoins += bitcoinsAmount;

            totalAmount -= (bitcoinsAmount * 11949.16);
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    let leftedMoney = totalAmount;

    totalAmount = 0;

    for(let i = 0; i < arr.length; i++) {
        let day = i + 1;
        firstDay++;

        let minedGold = Number(arr[i]);

        if(day % 3 === 0) {
            minedGold = minedGold * 0.7;
        }

        let exchange = minedGold * 67.51;
        totalAmount += exchange;

        if(totalAmount >= 11949.16) {
            if(totalBitcoins > 0) {
                console.log(`Day of the first purchased bitcoin: ${firstDay}`);
                break;
            }
            
        }
    }
    console.log(`Left money: ${leftedMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
console.log('--------------');
bitcoinMining([50, 100]);
console.log('--------------');
bitcoinMining([3124.15, 504.212, 2511.124]);