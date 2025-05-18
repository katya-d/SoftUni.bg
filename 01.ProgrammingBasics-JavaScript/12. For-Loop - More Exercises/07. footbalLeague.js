function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fansNumber = Number(input[1]);

    //Team One - Sector A and B
    //Team Two - Sector - V and G

    let aFans = 0;
    let bFans = 0;
    let vFans = 0;
    let gFans = 0;

    for(let i = 2; i < input.length; i++) {
        let sector = input[i];

        switch(sector) {
            case "A": aFans++; break;
            case "B": bFans++; break;
            case "V": vFans++; break;
            case "G": gFans++; break;
        }
    }

    let aSector = aFans / fansNumber * 100;
    let bSector = bFans / fansNumber * 100;
    let vSector = vFans / fansNumber * 100;
    let gSector = gFans / fansNumber * 100;

    let allFansPercent = fansNumber / stadiumCapacity * 100;

    console.log(`${aSector.toFixed(2)}%`);
    console.log(`${bSector.toFixed(2)}%`);
    console.log(`${vSector.toFixed(2)}%`);
    console.log(`${gSector.toFixed(2)}%`);
    console.log(`${allFansPercent.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
console.log("-------------------");
footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
]);

console.log("-------------------");

footballLeague([
  "1000",
  "12",
  "A",
  "A",
  "V",
  "V",
  "A",
  "G",
  "A",
  "A",
  "V",
  "G",
  "V",
  "A",
]);
