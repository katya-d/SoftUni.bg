function solve(input) {
  let schoolGrades = new Map();

  for (let line of input) {
    let [name, ...grades] = line.split(" ");
    grades = grades.map(Number);

    if (schoolGrades.has(name)) {
      let newGrades = schoolGrades.get(name);
      for (let grade of newGrades) {
        grades.push(grade);

        schoolGrades.set(name, grades);
      }
    } else {
      schoolGrades.set(name, grades);
    }
  }

  let sortedByName = Array.from(schoolGrades.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let sumOfGrades = 0;

  for (let [name, grades] of sortedByName) {
    for (let grade of grades) {
      sumOfGrades += grade;
    }

    let averageGrade = sumOfGrades / grades.length;

    console.log(`${name}: ${averageGrade.toFixed(2)}`);

    sumOfGrades = 0;
    averageGrade = 0;
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("-----------------------------");
solve(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
