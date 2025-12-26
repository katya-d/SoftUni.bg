function poundToDollarsConverter(pounds) {
  let poundToDollarExchangeRate = 1.31;
  let result = pounds * poundToDollarExchangeRate;

  console.log(result.toFixed(3));
}

poundToDollarsConverter(80);
poundToDollarsConverter(39);
