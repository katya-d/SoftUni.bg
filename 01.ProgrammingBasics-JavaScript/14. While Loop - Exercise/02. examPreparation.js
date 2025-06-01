function examPreparation(input) {
    let index = 1;
    let numberWeakGrades = 0;
    let totalScore = 0;
    let problemNumbers = 0;
    let problemName = "";
    while(input[index] !== "Enough") {
        let weakGrades = Number(input[0]);
        problemName = input[index];
        index++;
        let currentGrade = Number(input[index]);
        
        if(currentGrade <= 4) {
            numberWeakGrades++;
            if(numberWeakGrades >= weakGrades) {
                console.log(`You need a break, ${numberWeakGrades} poor grades.`);
                stopLoop = true;
                break;  
            }
        }

        totalScore += currentGrade;
        problemNumbers++;
         index++;
    }

    if(input[index] === "Enough") {
        console.log(`Average score: ${(totalScore / problemNumbers).toFixed(2)}`);
        console.log(`Number of problems: ${problemNumbers}`);
        console.log(`Last problem: ${problemName}`);
        
    }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
console.log("------------");
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
