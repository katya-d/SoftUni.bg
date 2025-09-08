function solve(firstInput, inputSecond) {
  let gladiatorPool = new Map();

  for (let line of firstInput) {
    if (line === "Ave Cesar") {
      break;
    }

    let [gladiatorName, technique, skillPoints] = line.split(" -> ");
    skillPoints = Number(skillPoints);

    if (!gladiatorPool.has(gladiatorName)) {
      gladiatorPool.set(gladiatorName, new Map());
    }

    let techniques = gladiatorPool.get(gladiatorName);

    if (!techniques.has(technique)) {
      techniques.set(technique, skillPoints);
    } else {
      let currentPoints = techniques.get(technique);

      if (skillPoints > currentPoints) {
        techniques.set(technique, skillPoints);
      }
    }
  }

  for (let line of inputSecond) {
    if (line === "Ave Cesar") {
      break;
    }
    let [gladiatorName, technique, skillPoints] = line.split(" -> ");
    skillPoints = Number(skillPoints);

    if (gladiatorName.includes("vs")) {
      let [firstGladiator, secondGladiator] = gladiatorName.split(" vs ");

      if(gladiatorPool.has(firstGladiator) && gladiatorPool.has(secondGladiator)) {
        let gladiatorOneTechniques = gladiatorPool.get(firstGladiator);
        let gladiatorTwoTechniques = gladiatorPool.get(secondGladiator);

        for(let gladiatorOne of gladiatorOneTechniques) {
        console.log(gladiatorOne);
        }

        
      }
      
  





    } else {
      if (!gladiatorPool.has(gladiatorName)) {
        gladiatorPool.set(gladiatorName, new Map());
      }

      let techniques = gladiatorPool.get(gladiatorName);

      if (!techniques.has(technique)) {
        techniques.set(technique, skillPoints);
      } else {
        let currentPoints = techniques.get(technique);

        if (skillPoints > currentPoints) {
          techniques.set(technique, skillPoints);
        }
      }
    }
  }
}

solve(
  [
    "Peter -> BattleCry -> 400",
    "Alex -> PowerPunch -> 300",
    "Stefan -> Tiger -> 250",
    "Stefan -> Duck -> 200",

    "Ave Cesar",
  ],
  [
    "Peter -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar",
  ]
);
