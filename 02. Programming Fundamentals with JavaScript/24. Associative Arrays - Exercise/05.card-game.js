function cardGame(input) {
  let personHands = new Map();

  for (let line of input) {
    let [name, cardsStr] = line.split(": ");
    let cards = cardsStr.split(", ");

    if (!personHands.has(name)) {
      personHands.set(name, cards);
    } else {
      let exitingCards = personHands.get(name);

      personHands.set(name, exitingCards.concat(cards));
    }
  }

  for (let [name, cards] of personHands) {
    let uniqueCards = [...new Set(cards)];
    personHands.set(name, uniqueCards);
  }

  let gamerPoints = new Map();
  let totalPoints = 0;
  let powerValue = 0;
  let multiply = 0;
  for (let [gamer, cards] of personHands) {
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let cardArray = card.split("");
      let powerOfTheCard = card.slice(0, -1);
      let typeOfTheCard = card.slice(-1);

      if (Number(powerOfTheCard) >= 2 && Number(powerOfTheCard) <= 10) {
        powerValue = powerOfTheCard;
      } else {
        switch (powerOfTheCard) {
          case "J":
            powerValue = 11;
            break;
          case "Q":
            powerValue = 12;
            break;
          case "K":
            powerValue = 13;
            break;
          case "A":
            powerValue = 14;
            break;
        }
      }

      switch (typeOfTheCard) {
        case "S":
          multiply = 4;
          break;
        case "H":
          multiply = 3;
          break;
        case "D":
          multiply = 2;
          break;
        case "C":
          multiply = 1;
          break;
      }

      let cardPoints = powerValue * multiply;
      totalPoints += cardPoints;
    }
    gamerPoints.set(gamer, totalPoints);
    totalPoints = 0;
  }

  for (let [name, cardPoints] of gamerPoints) {
    console.log(`${name}: ${cardPoints}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
console.log("---------------");
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
