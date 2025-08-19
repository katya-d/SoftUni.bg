function heartDelivery(input) {
  let neighborhoods = input.shift().split("@").map(Number);
  let endPosition = 0;

  let parts = input.shift().split(" ");
  let command = parts.shift();

  while (command !== "Love!") {
    let positionLength = Number(parts.shift());
    endPosition += positionLength;

    if (endPosition >= neighborhoods.length) {
      endPosition = 0;
    }

    if (neighborhoods[endPosition] === 0) {
      console.log(`Place ${endPosition} already had Valentine's day.`);
    } else {
      neighborhoods[endPosition] -= 2;
      if (neighborhoods[endPosition] === 0) {
        console.log(`Place ${endPosition} has Valentine's day.`);
      }
    }

    parts = input.shift().split(" ");
    command = parts.shift();
  }

  console.log(`Cupid's last position was ${endPosition}.`);
  let leftedHouses = neighborhoods.filter(x => x !== 0).length;

  if (leftedHouses === 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${leftedHouses} places.`);
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("-------------");
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
