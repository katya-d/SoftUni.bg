function dayOfWeek(dayNumber) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(dayNumber >= 0 && dayNumber <= 7) {
        console.log(weekDays[dayNumber - 1]);
    }else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);