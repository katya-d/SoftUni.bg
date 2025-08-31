function meetings(input) {
  let meetingsCalendar = {};

  for (let line of input) {
    let [day, name] = line.split(" ");
    if (meetingsCalendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      meetingsCalendar[day] = name;
    }
  }

  for (let sheduledDay in meetingsCalendar) {
    let name = meetingsCalendar[sheduledDay];
    console.log(`${sheduledDay} -> ${name}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log("---------------------");
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
