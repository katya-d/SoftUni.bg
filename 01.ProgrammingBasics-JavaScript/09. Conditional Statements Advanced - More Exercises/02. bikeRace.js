function bikeRace(juniorsNumber, seniorsNumber, raceType) {

    let juniorsTax = 0;
    let seniorTax = 0;

    let discount = 1;

    switch (raceType) {
        case "trail":
            juniorsTax = 5.50;
            seniorTax = 7;
        break;
    
        case "cross-country":
            juniorsTax = 8;
            seniorTax = 9.50;
        break;

        case "downhill":
            juniorsTax = 12.25;
            seniorTax = 13.75;
        break;

        case "road":
            juniorsTax = 20;
            seniorTax = 21.50;
        break;
    }

    let sum = (juniorsNumber * juniorsTax) + (seniorsNumber * seniorTax)

                
    let totalCompetitors = juniorsNumber + seniorsNumber;

    if(totalCompetitors >= 50 && raceType === "cross-country") {
        discount = 0.25;
        sum = sum - (sum * discount);
    }

    sum -= (sum * 0.05);

    console.log(sum.toFixed(2));
}

bikeRace(10, 20, 'trail');
bikeRace(21, 26, "cross-country");
bikeRace(30, 25, "cross-country");
bikeRace(10, 10, "downhill");
bikeRace(3, 40, "road");
