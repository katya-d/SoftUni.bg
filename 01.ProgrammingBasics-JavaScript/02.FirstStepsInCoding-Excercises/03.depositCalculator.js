function depositCalc(param1, param2, param3) {
    let depositSum = Number(param1);
    let depositQuarter = Number(param2);
    let annualInterestRate = Number(param3);

    let interestRate = depositSum * (annualInterestRate / 100);
    let monthlyInterestRate = interestRate / 12;
    let totalSum = depositSum + (monthlyInterestRate * depositQuarter);

    console.log(totalSum);
}

depositCalc(200, 3, 5.7);
depositCalc(2350, 6, 7);