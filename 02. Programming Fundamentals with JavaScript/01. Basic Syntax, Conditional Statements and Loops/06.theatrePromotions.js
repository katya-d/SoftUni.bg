function theatrePromotions(dayType, age) {
    let ticketPrice;

    switch (dayType) {
        case "Weekday":
            if(age >= 0 && age <= 18) {
                ticketPrice = 12;
            }else if(age > 18 && age <= 64) {
                ticketPrice = 18;
            }else if(age > 64 && age <= 122) {
                ticketPrice = 12;
            }else {
                ticketPrice = "Error!";
            }
        break;

        case "Weekend":
            if(age >= 0 && age <= 18) {
                ticketPrice = 15;
            }else if(age > 18 && age <= 64) {
                ticketPrice = 20;
            }else if(age > 64 && age <= 122) {
                ticketPrice = 15;
            }else {
                ticketPrice = "Error!";
            }
        break;

        case "Holiday":
            if(age >= 0 && age <= 18) {
                ticketPrice = 5;
            }else if(age > 18 && age <= 64) {
                ticketPrice = 12;
            }else if(age > 64 && age <= 122) {
                ticketPrice = 10;
            }else {
                ticketPrice = "Error!";
            }
        break;
    }

    if(ticketPrice !== "Error!") {
        console.log(`${ticketPrice}$`);
    }else {
        console.log("Error!");
    }
}

theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
