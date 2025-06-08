function bitcoinMining(data) {
  //lefted Money, Bought Bitcoins
  let minedGold = 0;
  let allMinedGold = 0;
  let bitcoinNumbers = 0;

  for (let i = 0; i < data.length; i++) {
    minedGold = Number(data[i]);

    if ((i + 1) % 3 === 0) {
      minedGold -= minedGold * 0.3;
    }
    allMinedGold += minedGold;
  }

  let boughtBitcoins = Math.floor((allMinedGold * 67.51) / 11949.16);

  console.log(`Bought bitcoins: ${boughtBitcoins}`);

  // First Day Buyed Bitcoin
  let index = 0;
  let dailyGold = 0;
  let dayNumber = 0;
  let totalGold = 0;
  let firstDayBitcoin = 0;
  let leftedMoney = 0;

  while (index < data.length) {
    dailyGold = Number(data[index]);
    dayNumber = index + 1;

    if (dayNumber % 3 === 0) {
      dailyGold -= dailyGold * 0.3;
    }

    totalGold += dailyGold;

    let totalMoney = totalGold * 67.51;

    if (totalMoney >= 11949.16) {
      firstDayBitcoin = dayNumber;
      break;
    }
    index++;
  }

  if (firstDayBitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBitcoin}`);
  }

      let money = allMinedGold * 67.51 - boughtBitcoins * 11949.16;
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
