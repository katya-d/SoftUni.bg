function radioCrystals(data) {
    let crystalThickness = Number(data.shift());
    let crystalMicrons;

    for(let i = 0; i < data.length; i++) {
        let cuts = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xray = 0;
        crystalMicrons = Number(data[i]);

        console.log(`Processing chunk ${crystalMicrons} microns`);

        // Cut
        while (crystalMicrons / 4 >= crystalThickness) {
            crystalMicrons /= 4;
            cuts++;
        }
        if (cuts > 0) {
            console.log(`Cut x${cuts}`);
            console.log('Transporting and washing');
            crystalMicrons = Math.floor(crystalMicrons);
        }

        // Lap
        while (crystalMicrons * 0.8 >= crystalThickness) {
            crystalMicrons *= 0.8;
            lap++;
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log('Transporting and washing');
            crystalMicrons = Math.floor(crystalMicrons);
        }

        // Grind
        while (crystalMicrons - 20 >= crystalThickness) {
            crystalMicrons -= 20;
            grind++;
        }
        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log('Transporting and washing');
            crystalMicrons = Math.floor(crystalMicrons);
        }

        // Etch
        while (crystalMicrons - 2 >= crystalThickness - 1) {
            crystalMicrons -= 2;
            etch++;
        }
        if (etch > 0) {
            console.log(`Etch x${etch}`);
            console.log('Transporting and washing');
            crystalMicrons = Math.floor(crystalMicrons);
        }

        // X-ray
        if (crystalMicrons === crystalThickness - 1) {
            crystalMicrons += 1;
            xray++;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${crystalMicrons} microns`);
    }

    


}

radioCrystals([1375, 50000]);