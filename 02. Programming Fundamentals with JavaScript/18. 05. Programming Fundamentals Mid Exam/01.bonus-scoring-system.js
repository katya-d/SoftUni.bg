function bonusScoreSystem(input) {
  let studentsNumber = Number(input.shift());
  let totalLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());

  if (studentsNumber > 0) {
    let sortedInput = input.sort((a, b) => a - b).map(Number);

    let bestAttendances = Number(sortedInput.pop());

    let maxBonus = (bestAttendances / totalLectures) * (5 + additionalBonus);

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${bestAttendances} lectures.`);
  }else {
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
  }
}

bonusScoreSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoreSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
