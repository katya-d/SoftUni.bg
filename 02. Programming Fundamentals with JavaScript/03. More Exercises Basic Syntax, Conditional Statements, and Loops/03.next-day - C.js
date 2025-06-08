function nextDay(yearOld, monthOld, dayOld) {

    let date = new Date(yearOld, monthOld - 1, dayOld);
    date.setDate(date.getDate() + 1);

    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1; // 
    let newDay = date.getDate();

    let endDate = `${newYear}-${newMonth}-${newDay}`;

    console.log(endDate);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);