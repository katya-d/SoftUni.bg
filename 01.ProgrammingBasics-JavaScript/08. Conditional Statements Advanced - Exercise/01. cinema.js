function cinema(projectionType, rowsNumber, columnsNumber) {
    let price = 0;

    switch (projectionType) {    
        case "Premiere":
            price = 12;
        break;
    
        case "Normal":
            price = 7.50;
        break;

        case "Discount":
            price = 5.00;
        break;
    }

    let totalPeople = rowsNumber * columnsNumber;
    let totalPrice = totalPeople * price;

    console.log(`${totalPrice.toFixed(2)} leva`);
    
}

cinema('Premiere', 10, 12);
cinema('Normal', 21, 13);
cinema('Discount', 12, 30);