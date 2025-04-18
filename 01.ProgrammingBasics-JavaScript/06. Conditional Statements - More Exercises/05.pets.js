function pets(daysNumber, leftedFood, dogFood, catFood, turtleFood) {
    let totalDogFood = daysNumber * dogFood;
    let totalCatFood = daysNumber * catFood;
    let turtleFoodInKg = turtleFood / 1000;
    let totalTurtleFood = daysNumber * turtleFoodInKg;

    let totalFood = totalDogFood + totalCatFood + totalTurtleFood;

    if(leftedFood >= totalFood) {
        let isEnougthFood = leftedFood - totalFood;
        console.log(`${Math.floor(isEnougthFood)} kilos of food left.`);
    }else {
        let notEnougthFood = totalFood - leftedFood;
        console.log(`${Math.ceil(notEnougthFood)} more kilos of food are needed.`);
    }
}

pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 321);