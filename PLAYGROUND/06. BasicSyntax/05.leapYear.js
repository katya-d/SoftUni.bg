function leapYear(year) {
    let isLeap = 'no';

    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        isLeap = 'yes';
    }

    console.log(isLeap);
}

leapYear(1984);
leapYear(2003);
leapYear(4);