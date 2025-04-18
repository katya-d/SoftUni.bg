function sleepyTomCat(weekendsNumber) {
    let year = 365;
    let catGameLimit = 30000;

    let workDays = year - weekendsNumber;

    let workDaysGame = workDays * 63;
    let weekendsGame = weekendsNumber * 127;

    let totalGameMinutes = workDaysGame + weekendsGame;

    let difference = catGameLimit - totalGameMinutes;

    if(difference <= 0) {
        console.log("Tom will run away");

        difference *= (-1);
        let hours = Math.floor(difference / 60);
        let minutes = Math.floor(difference % 60);

        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }else {
        console.log("Tom sleeps well");
        
        let hours = Math.floor(difference / 60);
        let minutes = Math.floor(difference % 60);

        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyTomCat(20);
sleepyTomCat(113);