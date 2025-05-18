function oscars(input) {
    let nominatedActorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesNumber = Number(input[2]);

    let judgeLetters = 0;
    let judgeName = "";
    let judgePoints = 0;

    let sumPoints = academyPoints;
    for(let i = 0; i < judgesNumber; i++) {
        let actorNum = 3 + i * 2;
        let actorPointsNum = 4 + i * 2;

        judgeName = input[actorNum];
        judgePoints = Number(input[actorPointsNum]);

        judgeLetters = judgeName.length;

        sumPoints = sumPoints + ((judgePoints * judgeLetters) / 2);
        
        if(sumPoints > 1250.5) {
            console.log(`Congratulations, ${nominatedActorName} got a nominee for leading role with ${sumPoints.toFixed(1)}!`);
            break;
        }
    }

    if(sumPoints <= 1250.5) {
        let neededPoints = 1250.5 - sumPoints;
        console.log(`Sorry, ${nominatedActorName} you need ${neededPoints.toFixed(1)} more!`);
        
    }
}

oscars([
  "Zahari Baharov",
  "205",
  4,
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
