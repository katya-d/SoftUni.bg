function schoolCamp(season, groupType, studentsNumber, nightsNumber) {
    let price = 0;
    let sport = "";

    switch(season) {
        case "Winter":
            if(groupType === "girls") {
                price = 9.60;
                sport = "Gymnastics";
            }else if(groupType === "boys") {
                price = 9.60;
                sport = "Judo";
            }else if(groupType === "mixed") {
                price = 10;
                sport = "Ski";
            }
        break;

        case "Spring":
            if(groupType === "girls") {
                price = 7.20;
                sport = "Athletics";
            }else if(groupType === "boys") {
                price = 7.20;
                sport = "Tennis";
            }else if(groupType === "mixed") {
                price = 9.50;
                sport = "Cycling";
            }
        break;

        case "Summer":
            if(groupType === "girls") {
                price = 15;
                sport = "Volleyball";
            }else if(groupType === "boys") {
                price = 15;
                sport = "Football";
            }else if(groupType === "mixed") {
                price = 20;
                sport = "Swimming";
            }
        break;
    }

    let sum = (studentsNumber * price) * nightsNumber;

    if(studentsNumber >= 50) {
        sum*= 0.50;
    }else if(studentsNumber >= 20 && studentsNumber < 50) {
        sum -= sum * 0.15;
    }else if(studentsNumber >= 10 && studentsNumber < 20) {
        sum -= sum * 0.05;
    }

    console.log(`${sport} ${sum.toFixed(2)} lv.`);
}

schoolCamp("Spring", "girls", 20, 7);
schoolCamp("Winter", "mixed", 9, 15);
schoolCamp("Summer", "boys", 60, 7);
schoolCamp("Spring", "mixed", 17, 14);