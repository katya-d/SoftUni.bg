function buildAWall(input) {
  let heights = input.map(Number);
  const costPerYard = 1900;
  const concretePerWorkerPerDay = 195;
  let dailyConcrete = [];

  while (heights.some((h) => h < 30)) {
    let concreteToday = 0;

    for (let i = 0; i < heights.length; i++) {
      if (heights[i] < 30) {
        heights[i]++;
        concreteToday += concretePerWorkerPerDay;
      }
    }

    if (concreteToday > 0) {
      dailyConcrete.push(concreteToday);
    }
  }

  let totalConcrete = dailyConcrete.reduce((a, b) => a + b, 0);
  console.log(dailyConcrete.join(", "));
  console.log(`${totalConcrete * costPerYard} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
