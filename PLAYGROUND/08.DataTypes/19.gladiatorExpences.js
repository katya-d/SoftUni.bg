function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBreaks = parseInt(lostFights / 2);
    let swordBreaks = parseInt(lostFights / 3);
    let shielBreaks = parseInt(lostFights / 6);
    let armorBreaks = parseInt(lostFights / 12);

    let expenses = (helmetBreaks * helmetPrice) + (swordBreaks * swordPrice) + (shielBreaks * shieldPrice) + (armorBreaks * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpences(7, 2, 3, 4, 5);
gladiatorExpences(23, 12.5, 21.5, 40, 200);