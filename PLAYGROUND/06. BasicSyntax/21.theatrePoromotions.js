function theatrePormotions(day, age) {
    let result = 0;

    switch (day) {
        case 'Weekday':
            if(age >= 0 && age <= 18) {
                result = 12;
            } else if(age > 18 && age <= 64) {
                result = 18;
            }else if(age > 64 && age <= 122) {
                result = 12;
            }
            break;
        case 'Weekend':
            if(age >= 0 && age <= 18) {
                result = 15;
            } else if(age > 18 && age <= 64) {
                result = 20;
            }else if(age > 64 && age <= 122) {
                result = 15;
            }
            break;
        case 'Holiday':
            if(age >= 0 && age <= 18) {
                result = 5;
            } else if(age > 18 && age <= 64) {
                result = 12;
            }else if(age > 64 && age <= 122) {
                result = 10;
            }
            break;
    }

    if(result === 0) {
        console.log(`Error!`);
    }else {
        console.log(`${result}$`);
    }
}

theatrePormotions("Weekday", 42);
theatrePormotions("Holiday", -12);
theatrePormotions("Holiday", 15);
