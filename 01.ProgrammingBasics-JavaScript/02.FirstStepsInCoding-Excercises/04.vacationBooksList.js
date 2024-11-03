function vacationBookList(param1, param2, param3) {
    let pagesNumber = Number(param1);
    let readedPagesPerHour = Number(param2);
    let daysNumber = Number(param3);

    let totalHours = pagesNumber / readedPagesPerHour;
    let neededHours = totalHours / daysNumber;

    console.log(neededHours);
}

vacationBookList(212, 20, 2);
vacationBookList(432, 15, 4);