function requiredReading(bookPages, pagesReadedPerHour, daysNumber) {
    let totalTimeNeeded = bookPages / pagesReadedPerHour;
    let requiredHours = totalTimeNeeded / daysNumber;

    console.log(requiredHours);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
