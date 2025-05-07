function truckDriver(workSeason, monthlyDriveKm) {
    //1 season = 4 months

    let kmPrice = 0;

    switch(workSeason) {
        case "Spring":
        case "Autumn":

            if(monthlyDriveKm <= 5000) {
                kmPrice = 0.75;
            }else if(monthlyDriveKm > 5000 && monthlyDriveKm <= 10000) {
                kmPrice = 0.95;
            }else if(monthlyDriveKm > 10000 && monthlyDriveKm <= 20000) {
                kmPrice = 1.45;
            }
        break;

        case "Summer":
            if(monthlyDriveKm <= 5000) {
                kmPrice = 0.90;
            }else if(monthlyDriveKm > 5000 && monthlyDriveKm <= 10000) {
                kmPrice = 1.10;
            }else if(monthlyDriveKm > 10000 && monthlyDriveKm <= 20000) {
                kmPrice = 1.45;
            }
        break;

        case "Winter":
            if(monthlyDriveKm <= 5000) {
                kmPrice = 1.05;
            }else if(monthlyDriveKm > 5000 && monthlyDriveKm <= 10000) {
                kmPrice = 1.25;
            }else if(monthlyDriveKm > 10000 && monthlyDriveKm <= 20000) {
                kmPrice = 1.45;
            }
        break;
    }

    let salary = (monthlyDriveKm * kmPrice) * 4;
    salary *= 0.90;

    console.log(salary.toFixed(2));
}

truckDriver('Summer', 3455);
truckDriver("Winter", 4350);
truckDriver("Spring", 1600);
truckDriver("Winter", 5678);
truckDriver("Autumn", 8600);
truckDriver("Winter", 16042);
truckDriver("Spring", 16942);