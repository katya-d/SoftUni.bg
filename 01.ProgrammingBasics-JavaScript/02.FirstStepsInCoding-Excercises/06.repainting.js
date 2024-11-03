function repainting(param1, param2, param3, param4) {
    //Parameters names an values
    let nylonQuantity = Number(param1);
    let paintLiters = Number(param2);
    let thinnerQuantity = Number(param3);
    let workHours = Number(param4);

    //PRICES
    let nylonPricePerMeter = 1.50;
    let paintPricePerLiter = 14.50;
    let paintThinnerPricePerLiter = 5.00;

    //Additional Materials
    let additionalNylon = 2;
    let additionalPaintPercent = paintLiters * (10 / 100);
    let bags = 0.40;

    //Prices
    let nylonPrice = (nylonQuantity + additionalNylon) * nylonPricePerMeter;
    let paintPrice = (paintLiters + additionalPaintPercent) * paintPricePerLiter;
    let thinnerPrice = thinnerQuantity * paintThinnerPricePerLiter;

    let allMaterialsPrice = nylonPrice + paintPrice + thinnerPrice + bags;

    //Workers Salary Per Hour
    let workersSalaryPerHour = allMaterialsPrice * (30 / 100);

    //Workers Total Salary
    let workersSalary = workHours * workersSalaryPerHour;

    let totalExpenses = allMaterialsPrice + workersSalary;

    console.log(totalExpenses); 
}

repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);
