function vacation(numberOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;

    switch(dayOfWeek) {
        case 'Friday':
            if(typeOfGroup === 'Students') {
                totalPrice = numberOfPeople * 8.45;

                if(numberOfPeople >= 30) {
                    totalPrice -= (totalPrice * 0.15);
                }

            }else if(typeOfGroup === 'Business') {
                totalPrice = numberOfPeople * 10.90;

                if(numberOfPeople >= 100) {
                    let freePlaces = 10 * 10.90;
                    totalPrice -= freePlaces;
                }
            }else if(typeOfGroup === 'Regular') {
                totalPrice = numberOfPeople * 15;

                if(numberOfPeople >= 10 && numberOfPeople <= 20) {
                    totalPrice -= (totalPrice * 0.05);
                }
            }
            break;
        case 'Saturday':
            if(typeOfGroup === 'Students') {
                totalPrice = numberOfPeople * 9.80;

                if(numberOfPeople >= 30) {
                    totalPrice -= (totalPrice * 0.15);
                }

            }else if(typeOfGroup === 'Business') {
                totalPrice = numberOfPeople * 15.60;

                if(numberOfPeople >= 100) {
                    let freePlaces = 10 * 15.60;
                    totalPrice -= freePlaces;
                }
            }else if(typeOfGroup === 'Regular') {
                totalPrice = numberOfPeople * 20;

                if(numberOfPeople >= 10 && numberOfPeople <= 20) {
                    totalPrice -= (totalPrice * 0.05);
                }
            }
            break;
        case 'Sunday':
            if(typeOfGroup === 'Students') {
                totalPrice = numberOfPeople * 10.46;

                if(numberOfPeople >= 30) {
                    totalPrice -= (totalPrice * 0.15);
                }

            }else if(typeOfGroup === 'Business') {
                totalPrice = numberOfPeople * 16;

                if(numberOfPeople >= 100) {
                    let freePlaces = 10 * 16;
                    totalPrice -= freePlaces;
                }
            }else if(typeOfGroup === 'Regular') {
                totalPrice = numberOfPeople * 22.50;

                if(numberOfPeople >= 10 && numberOfPeople <= 20) {
                    totalPrice -= (totalPrice * 0.05);
                }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
