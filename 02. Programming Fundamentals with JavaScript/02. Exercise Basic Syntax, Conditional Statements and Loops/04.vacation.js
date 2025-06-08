function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            switch (typeOfGroup) {
                case "Students":
                    if(groupOfPeople >= 30) {
                        price = (groupOfPeople * 8.45) * 0.85;
                    }else {
                        price = groupOfPeople * 8.45;
                    }
                break;
            
                case "Business":
                    if(groupOfPeople >= 100) {
                        price = (groupOfPeople - 10) * 10.90;
                    }else {
                        price = groupOfPeople * 10.90;
                    }
                break;

                case "Regular":
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        price = (groupOfPeople * 15) * 0.95;
                    }else {
                        price = groupOfPeople * 15;
                    }
                break;
            }
        break;
    
        case "Saturday":
        switch (typeOfGroup) {
                case "Students":
                    if(groupOfPeople >= 30) {
                        price = (groupOfPeople * 9.80) * 0.85;
                    }else {
                        price = groupOfPeople * 9.80;
                    }
                break;
            
                case "Business":
                    if(groupOfPeople >= 100) {
                        price = (groupOfPeople - 10) * 15.60;
                    }else {
                        price = groupOfPeople * 15.60;
                    }
                break;

                case "Regular":
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        price = (groupOfPeople * 20) * 0.95;
                    }else {
                        price = groupOfPeople * 20;
                    }
                break;
            }
        break;

        case "Sunday":
            switch (typeOfGroup) {
                case "Students":
                    if(groupOfPeople >= 30) {
                        price = (groupOfPeople * 10.46) * 0.85;
                    }else {
                        price = groupOfPeople * 10.46;
                    }
                break;
            
                case "Business":
                    if(groupOfPeople >= 100) {
                        price = (groupOfPeople - 10) * 16;
                    }else {
                        price = groupOfPeople * 16;
                    }
                break;

                case "Regular":
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        price = (groupOfPeople * 22.50) * 0.95;
                    }else {
                        price = groupOfPeople * 22.50;
                    }
                break;
            }
        break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
