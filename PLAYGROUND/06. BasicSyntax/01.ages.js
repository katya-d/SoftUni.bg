function ages(age) {
    let humanType = '';
    if(age >= 0 && age <= 2) {
        humanType = 'baby';
    }else if(age >= 3 && age <= 13) {
        humanType = 'child';
    }else if(age >= 14 && age <= 19) {
        humanType = 'teenager';
    }else if(age >= 20 && age <= 65) {
        humanType = 'adult';
    }else if(age >= 66) {
        humanType = 'elder';
    }else {
        humanType = 'out of bounds'
    }

    console.log(humanType);  
}

ages(20);
ages(1);
ages(100);
ages(-1);