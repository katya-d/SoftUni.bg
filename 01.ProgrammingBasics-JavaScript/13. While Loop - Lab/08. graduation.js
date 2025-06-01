function graduation(input) {
    let index = 0;
    let studentName = input[index];
    let failed = 0;
    let totalGrade = 0;
    let passedYear = 0;

    while(index < input.length) {
        index++;

        let yearGrade = Number(input[index]);

        if(yearGrade >= 4) {
            totalGrade += yearGrade;
            passedYear++;
        }else {
            if(failed > 1) {
                console.log(`${studentName} has been excluded at ${passedYear + 1} grade`);
                break;
            }
            failed++;
        }
    }

    if(passedYear === 12) {
        averageGrade = totalGrade / passedYear;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
