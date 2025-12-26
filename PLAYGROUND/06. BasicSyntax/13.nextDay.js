function nextDay(year, month, day) {
    let date = new Date();
    let setYear = date.setFullYear(year);
    let setMonth = date.setMonth(month - 1);
    let newDate = date.setDate(day + 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);

//Score 75 from 100 in SoftUni Judge