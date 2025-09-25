function dayInAMonth(month, year) {
    let monthDays = new Date(year, month, 0).getDate();

    console.log(monthDays);
}

dayInAMonth(1, 2012);
dayInAMonth(2, 2021);
