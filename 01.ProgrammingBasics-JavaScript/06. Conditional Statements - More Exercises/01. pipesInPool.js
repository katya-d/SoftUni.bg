function pipesInPool(poolVolume, firstPipeDebit, secondPipeDebit, absenceHours) {
    let firstPipeLitersWater = firstPipeDebit * absenceHours;
    let secondPipeLitersWater = secondPipeDebit * absenceHours;

    let waterFromPipes = firstPipeLitersWater + secondPipeLitersWater;

    let isEnoughVolume = poolVolume - waterFromPipes;

    if(isEnoughVolume >= 0) {
        let pipesVolumeWater = waterFromPipes / poolVolume * 100;
        let firstPipePercentage = firstPipeLitersWater / waterFromPipes * 100;
        let secondPipePercentage = secondPipeLitersWater / waterFromPipes * 100;

        console.log(`The pool is ${pipesVolumeWater.toFixed(2)}% full. Pipe 1: ${firstPipePercentage.toFixed(2)}%. Pipe 2: ${secondPipePercentage.toFixed(2)}%.`);
    } else {
        isEnoughVolume *= (-1);

        console.log(`For ${absenceHours.toFixed(2)} hours the pool overflows with ${isEnoughVolume.toFixed(2)} liters.`);
    }
}

pipesInPool(1000, 100, 120, 3);
pipesInPool(100, 100, 100, 2.5);