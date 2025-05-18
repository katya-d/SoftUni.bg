function grades(input) {
    let studentsNumber = Number(input[0]);

    let weakGrade = 0;
    let mediumGrade = 0;
    let veryGoodGrade = 0;
    let excellentGrade = 0;

    let weakStudents = 0;
    let mediumStudents = 0;
    let veryGoodStudents = 0
    let excellentStudents = 0;

    for(let i = 1; i <= studentsNumber; i++) {
        let studentGrade = Number(input[i]);

        if(studentGrade >= 2 && studentGrade <= 2.99) {
            weakGrade += studentGrade;
            weakStudents++;

        }else if(studentGrade >= 3 && studentGrade <= 3.99) {
            mediumGrade += studentGrade;
            mediumStudents++;

        }else if(studentGrade >= 4 && studentGrade <= 4.99) {
            veryGoodGrade += studentGrade;
            veryGoodStudents++;

        }else if(studentGrade >= 5) {
            excellentGrade += studentGrade;
            excellentStudents++;
        }
    }

    console.log(`Top students: ${((excellentStudents / studentsNumber) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGoodStudents / studentsNumber) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((mediumStudents / studentsNumber) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((weakStudents / studentsNumber) * 100).toFixed(2)}%`);
    
    let averageGrade = (weakGrade + mediumGrade + veryGoodGrade + excellentGrade) / studentsNumber;

    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
