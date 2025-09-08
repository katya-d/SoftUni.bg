function partyTime(input) {
  let guests = [];

  let index = 0;
  while (input[index] !== "PARTY") {
    guests.push(input[index]);
    index++;
  }

  index++;
  while (index < input.length) {
    let guestIndex = guests.indexOf(input[index]);
    if (guestIndex !== -1) {
      guests.splice(guestIndex, 1); 
    }
    index++;
  }

  let vip = [];
  let regular = [];

  for (let guest of guests) {
    if (!isNaN(guest[0])) {
      vip.push(guest);
    } else {
      regular.push(guest);
    }
  }

  console.log(vip.length + regular.length);

  for (let guest of vip) {
    console.log(guest);
  }

  for (let guest of regular) {
    console.log(guest);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "123ock30",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log("----------------------");
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
