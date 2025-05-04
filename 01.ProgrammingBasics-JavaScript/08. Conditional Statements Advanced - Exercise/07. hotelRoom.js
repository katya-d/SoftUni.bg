function hotelRoom(month, nightsNumber) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(month) {
        case 'May':
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;

            if(nightsNumber > 14) {
                studioPrice -= (studioPrice * 0.30);
            }else if(nightsNumber > 7) {
                studioPrice -= (studioPrice * 0.05);
            }

        break;

        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            if(nightsNumber > 14) {
                studioPrice -= (studioPrice * 0.20);
            }

        break;

        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
        break;
    }

    if(nightsNumber > 14) {
        apartmentPrice -= (apartmentPrice * 0.10);
    }

    let endApartmentPrice = nightsNumber * apartmentPrice;
    let endStudioPrice = nightsNumber * studioPrice;

    console.log(`Apartment: ${endApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${endStudioPrice.toFixed(2)} lv.`);
    
}

hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);