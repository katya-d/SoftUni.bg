function harvest(vineyardAreaX, grapesY, wineZ, workersNumber) {
    
    let totalGrapesKgs = vineyardAreaX * grapesY;

    let forWineProduction = totalGrapesKgs * 0.40;
    let wineLiters = forWineProduction / 2.5;

    let wineForSale = wineLiters - wineZ;
    let winePerWorker = wineForSale / workersNumber;

    if(wineForSale >= 0) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(wineForSale)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }else {
        wineForSale *= (-1);
        console.log(`It will be a tough winter! More ${Math.floor(wineForSale)} liters wine needed.`);
    }
}

harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);