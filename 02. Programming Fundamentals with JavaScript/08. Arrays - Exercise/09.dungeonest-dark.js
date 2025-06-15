function solve(stringInput) {
    let health = 100;
    let coins = 0;
    let arr = [];
    arr = stringInput.split("|");

    for(let i = 0; i < arr.length; i++) {
        let room = arr[i];
        let roomArray = room.split(" ");

        let roomItemOrMonster = roomArray[0];
        let roomPoints = Number(roomArray[1]);

        if(roomItemOrMonster === 'potion') {
            health += roomPoints;
            let overHealth = 0;
            if(health > 100) {
                overHealth = health - 100;
                health = 100;
            }

            console.log(`You healed for ${roomPoints - overHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(roomItemOrMonster === 'chest') {
            coins += Number(roomPoints);
            console.log(`You found ${roomPoints} coins.`);   
        }else {
            health -= roomPoints;
            if(health > 0) {
                console.log(`You slayed ${roomItemOrMonster}.`);
            }else {
                console.log(`You died! Killed by ${roomItemOrMonster}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
    
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log('-------------');

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");