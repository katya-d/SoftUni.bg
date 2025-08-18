function counterStrike(input) {
    let initialEnergy = Number(input.shift());
 
    let wonBattles = 0;
    let index = 0;
   
    while (input[index] !== "End of battle") {
        let distance = Number(input[index]);
        
        wonBattles++;
        initialEnergy -= distance;

        if (initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            return;
        }
      
        if (wonBattles % 3 == 0) {
            initialEnergy += wonBattles;
        }
 
        index++;
    }
 
    console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
