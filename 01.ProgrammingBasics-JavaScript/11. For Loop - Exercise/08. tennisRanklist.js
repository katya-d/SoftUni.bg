function tennisRanklist(input) {
    let numberTournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let totalPoints = startPoints;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        let stage = input[i];

        switch (stage) {
            case "W": totalPoints += 2000;  
            wins++; 
            break;
            case "F": totalPoints += 1200;  break;
            case "SF": totalPoints += 720;  break;
        }
    }

    console.log(`Final points: ${totalPoints}`);

    let averagePoints = (totalPoints - startPoints) / numberTournaments;
    console.log(`Average points: ${Math.floor(averagePoints)}`);

    let percentWins = wins / numberTournaments * 100;
    console.log(`${percentWins.toFixed(2)}%`);
    
}

tennisRanklist(["5", 
"1400",
"F",
"SF",
"W",
"W",
"SF"]);

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);