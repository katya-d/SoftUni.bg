function trekkingMania(input) {
    let peopleNumbers = 0;
    let totalPeople = 0;

    let peakMusala = 0;
    let peakMontBlanc = 0;
    let peakKilimanjaro = 0;
    let peakK2 = 0;
    let peakEverest = 0;

    for(let i = 1; i < input.length; i++) {
        peopleNumbers = Number(input[i]);
        totalPeople += peopleNumbers;

        if(peopleNumbers <= 5) {
            peakMusala += peopleNumbers;
        }else if(peopleNumbers >= 6 && peopleNumbers <= 12) {
            peakMontBlanc += peopleNumbers;
        }else if(peopleNumbers >= 13 && peopleNumbers <= 25) {
            peakKilimanjaro += peopleNumbers;
        }else if(peopleNumbers >= 26 && peopleNumbers <= 40) {
            peakK2 += peopleNumbers;
        }else if(peopleNumbers >= 41) {
            peakEverest += peopleNumbers;
        }
    }

    let musalaPercent = (peakMusala / totalPeople) * 100;
    let montBlancPercent = peakMontBlanc / totalPeople * 100;
    let kilimanjaroPercent = peakKilimanjaro / totalPeople * 100;
    let k2Percent = peakK2 / totalPeople * 100;
    let everestPercent = peakEverest / totalPeople * 100;
    
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montBlancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);

trekkingMania(["5", "25", "41", "31", "250", "6"]);
