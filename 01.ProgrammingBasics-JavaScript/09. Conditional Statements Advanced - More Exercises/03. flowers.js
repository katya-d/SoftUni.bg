function flowers(chrysanthemumsNumber, rosesNumber, tulipsNumber, season, isHoliday) {
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    let additionalPricePercent = 0;

    if(isHoliday === "Y") {
        additionalPricePercent = 0.15;
    }

    switch (season) {
        case "Spring":
        case "Summer":
                chrysanthemumsPrice = chrysanthemumsNumber * 2;
                chrysanthemumsPrice += chrysanthemumsPrice * additionalPricePercent;

                rosesPrice = rosesNumber * 4.10;
                rosesPrice += rosesPrice * additionalPricePercent;

                tulipsPrice = tulipsNumber * 2.50;
                tulipsPrice += tulipsPrice * additionalPricePercent;
        break;

        case "Autumn":
        case "Winter":
                chrysanthemumsPrice = chrysanthemumsNumber * 3.75;
                chrysanthemumsPrice += chrysanthemumsPrice * additionalPricePercent;

                rosesPrice = rosesNumber * 4.50;
                rosesPrice += rosesPrice * additionalPricePercent;
                
                tulipsPrice = tulipsNumber * 4.15;
                tulipsPrice += tulipsPrice * additionalPricePercent;
        break;
    }

    let bucketPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;

    if(season === 'Spring' && tulipsNumber > 7) {
        bucketPrice *= 0.95;
    } else if(season === "Winter" && rosesNumber >= 10) {
        bucketPrice *= 0.90;
    }

    let totalFlowers = chrysanthemumsNumber + rosesNumber + tulipsNumber;

    if(totalFlowers > 20) {
        bucketPrice *= 0.80;
    }

    bucketPrice += 2;

    console.log(bucketPrice.toFixed(2));
}

flowers(2, 4, 8, "Spring", "Y");
flowers(3, 10, 9, "Winter", "N");
flowers(10, 10, 10, "Autumn", "N");