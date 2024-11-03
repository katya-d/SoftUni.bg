function currencyConverter(param1) {
    let usd = Number(param1);
    let exchangeRate = 1.79549;

    let usdToBgnSum = usd * exchangeRate;

    console.log(usdToBgnSum);
}

currencyConverter(22);
currencyConverter(100);
currencyConverter(12.5);