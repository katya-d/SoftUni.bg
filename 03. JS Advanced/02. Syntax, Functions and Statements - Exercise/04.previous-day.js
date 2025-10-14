function previousDay(year, month, day) {
  let dateObj = new Date(year, month - 1, day);
  let currentTime = dateObj.getTime();
  let yesterdayTime = currentTime - 24 * 60 * 60 * 1000;
  dateObj.setTime(yesterdayTime);
  let newYear = dateObj.getFullYear();
  let newMonth = dateObj.getMonth() + 1;
  let newDay = dateObj.getDate();

  console.log(`${newYear}-${newMonth}-${newDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
