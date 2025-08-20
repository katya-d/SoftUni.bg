function blackFlag(input) {
  let days = Number(input[0]);
  let dailyPlunder = Number(input[1]);
  let expectedPlunder = Number(input[2]);

  let totalPlunder = 0;
  let additionalPlunder = dailyPlunder * 0.5;

  for (let day = 1; day <= days; day++) {
    totalPlunder += dailyPlunder;

    if(day % 3 === 0 && day % 5 === 0) {
        totalPlunder += additionalPlunder;
        totalPlunder *= 0.7;
    }else if (day % 3 === 0) {
      totalPlunder += additionalPlunder;
    } else if (day % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let collectedPercentage = (totalPlunder / expectedPlunder) * 100;

    console.log(
      `Collected only ${collectedPercentage.toFixed(2)}% of the plunder.`
    );
  }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
