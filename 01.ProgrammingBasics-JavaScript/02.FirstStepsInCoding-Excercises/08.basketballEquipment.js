function basketballEquipment(param1) {
    let annualTax = Number(param1);

    let shoesPrice = annualTax - (annualTax * (40 / 100));
    let equipmentPrice = shoesPrice - (shoesPrice * (20 / 100));
    let ballPrice = equipmentPrice * (1/4);
    let accessoriesPrice = ballPrice * (1 / 5);

    let yearExpenses = annualTax + shoesPrice + equipmentPrice + ballPrice + accessoriesPrice;

    console.log(yearExpenses); 
}

basketballEquipment(365);
basketballEquipment(550);