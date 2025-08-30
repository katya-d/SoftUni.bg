function schoolRegister(input) {
  let schoolRegister = [];
  let studentInfo = {};
  for (let line of input) {
    let lineParts = line.split(", ");
    let studentName = lineParts[0];
    let studentGrade = lineParts[1];
    let studentScore = lineParts[2];

    studentInfo = {
      name: studentName.split(": ")[1],
      grade: Number(studentGrade.split(": ")[1]),
      averageScore: Number(studentScore.split(": ")[1]),
    };

    schoolRegister.push(studentInfo);
  }

  schoolRegister = schoolRegister.sort((a, b) => {
    let aGrade = a.grade;
    let bGrade = b.grade;
    return aGrade - bGrade;
  });

  schoolRegister = schoolRegister.filter((x) => x.averageScore >= 3);

  let byGrade = {};
  let byGradeArray = [];

  for (let student of schoolRegister) {
    if (!byGrade[student.grade]) {
      byGrade[student.grade] = { students: [], scores: [] };
    }
    byGrade[student.grade].students.push(student.name);
    byGrade[student.grade].scores.push(student.averageScore);
  }

  for (let grade in byGrade) {
    console.log(`${Number(grade) + 1} Grade`);

    let students = byGrade[grade].students.join(", ");
    console.log(`List of students: ${students}`);

    let scores = byGrade[grade].scores;
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    console.log(`Average annual score from last year: ${average.toFixed(2)}`);
    console.log("");
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
console.log("------------");
schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
