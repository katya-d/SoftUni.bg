function bills(input) {
    let averageMonths = Number(input[0]);
    let totalElectricityBills = 0;
    let otherSum = 0;
    let totalOtherSum = 0;

    for(let i = 1; i <= averageMonths; i++) {
        let monthlyBill = Number(input[i]);

        totalElectricityBills += monthlyBill;

        otherSum = (monthlyBill + 20 + 15) + ((monthlyBill + 20 + 15) * 0.20);

        totalOtherSum += otherSum;
        
    }

    let totalWaterBills = averageMonths * 20;
    let totalInternetBills = averageMonths * 15;

    let sum = (totalElectricityBills + totalWaterBills + totalInternetBills + totalOtherSum) / averageMonths;

    console.log(`Electricity: ${totalElectricityBills.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterBills.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetBills.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherSum.toFixed(2)} lv`);
    console.log(`Average: ${sum.toFixed(2)} lv`);
}

// bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8",
  "123.54",
  "231.54",
  "140.23",
  "100",
  "122.4",
  "430",
  "178.52",
  "64.2"]);
