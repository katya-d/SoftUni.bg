function formatGrade(grade) {
    let result = '';

    if(grade < 3.00) {
        result = 'Fail';
    }else if(grade >= 3.00 && grade < 3.50) {
        result = 'Poor';
    }else if(grade >= 3.50 && grade < 4.50) {
        result = 'Good';
    }else if(grade >= 4.50 && grade < 5.50) {
        result = 'Very good';
    }else if(grade >= 5.50) {
        result = 'Excellent';
    }

    if(grade < 3) {
        grade = 2;
    }else {
        grade = grade.toFixed(2)
    }

    let output = `${result} (${grade})`;

    return output;
}

console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));