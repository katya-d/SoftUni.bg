function requiredReading(pages, pagesPerHour, daysNumber) {
    let neededHours = pages / pagesPerHour;
    let requiredHoursPerDay = neededHours / daysNumber;

    console.log(requiredHoursPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
