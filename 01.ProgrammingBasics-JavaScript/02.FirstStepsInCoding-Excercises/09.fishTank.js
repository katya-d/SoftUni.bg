function fishTank(param1, param2, param3, param4) {
    let length = Number(param1);
    let width = Number(param2);
    let height = Number(param3);
    let percent = Number(param4);

    let parallelepipedVolume = length * width * height;

    let aquariumVolume = parallelepipedVolume * 0.001;

    let occupiedSurface = aquariumVolume * (percent / 100);

    let neededLitersWater = aquariumVolume - occupiedSurface;

    console.log(neededLitersWater);
}

fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);