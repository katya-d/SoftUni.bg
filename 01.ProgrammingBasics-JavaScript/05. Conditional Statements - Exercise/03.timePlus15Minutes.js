function timePlus15Minutes(hours, minutes) {
    let convertedHours = hours * 60;
    let totalMinutes = convertedHours + minutes + 15;

    let endHour = Math.floor(totalMinutes / 60);
    let endMinutes = totalMinutes % 60;

    if(endHour === 24) {
        endHour = 0;
    }

    if(endMinutes < 10) {
        console.log(`${endHour}:0${endMinutes}`);
    }else {
        console.log(`${endHour}:${endMinutes}`);
    }
}

timePlus15Minutes(1, 46);
timePlus15Minutes(0, 1);
timePlus15Minutes(23, 59);
timePlus15Minutes(11, 8);
timePlus15Minutes(12, 49);